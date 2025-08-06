const CACHE_NAME = 'bookspark-v1.0.0'
const STATIC_CACHE = 'bookspark-static-v1.0.0'
const DYNAMIC_CACHE = 'bookspark-dynamic-v1.0.0'

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/generator',
  '/resources',
  '/about',
  '/romance-book-ideas',
  '/mystery-plot-generator', 
  '/fantasy-story-ideas',
  '/science-fiction-concepts',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Error caching static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Old caches cleaned up')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return
  }

  // Handle API requests with network first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone response for caching
          const responseClone = response.clone()
          
          if (response.status === 200) {
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone))
          }
          
          return response
        })
        .catch(() => {
          // Return cached version if network fails
          return caches.match(request)
        })
    )
    return
  }

  // Handle static assets and pages with cache first strategy
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('Serving from cache:', request.url)
          return cachedResponse
        }

        // Not in cache, fetch from network
        return fetch(request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // Clone response for caching
            const responseClone = response.clone()
            
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                console.log('Caching new resource:', request.url)
                cache.put(request, responseClone)
              })

            return response
          })
          .catch((error) => {
            console.error('Fetch failed for:', request.url, error)
            
            // Return offline fallback for navigation requests
            if (request.destination === 'document') {
              return caches.match('/')
                .then((fallback) => {
                  return fallback || new Response('Offline - Please check your connection', {
                    status: 503,
                    statusText: 'Service Unavailable'
                  })
                })
            }
            
            // For other requests, just fail
            throw error
          })
      })
  )
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag)
  
  if (event.tag === 'save-idea') {
    event.waitUntil(syncSavedIdeas())
  }
})

// Sync saved ideas when back online
async function syncSavedIdeas() {
  try {
    const savedIdeas = await getSavedIdeasFromStorage()
    console.log('Syncing saved ideas:', savedIdeas.length)
    
    // Here you could sync with a backend API
    // For now, we just log the action
    console.log('Ideas synced successfully')
  } catch (error) {
    console.error('Failed to sync saved ideas:', error)
  }
}

// Helper function to get saved ideas from IndexedDB or localStorage
async function getSavedIdeasFromStorage() {
  try {
    // Try to get from IndexedDB first, fallback to localStorage
    if ('indexedDB' in self) {
      // IndexedDB implementation would go here
      return []
    } else {
      // Fallback to localStorage (limited in service worker)
      return []
    }
  } catch (error) {
    console.error('Error accessing storage:', error)
    return []
  }
}

// Push notification handling (for future features)
self.addEventListener('push', (event) => {
  console.log('Push notification received')
  
  const options = {
    body: event.data ? event.data.text() : 'New book idea inspiration available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Ideas',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-96x96.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('BookSpark', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.action)
  
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/generator')
    )
  }
})