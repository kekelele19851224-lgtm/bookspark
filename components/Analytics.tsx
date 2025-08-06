'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics 4 configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Google Analytics 4 tracking
export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Analytics
    script.onload = () => {
      window.gtag = window.gtag || function (...args: any[]) {
        window.gtag.q = window.gtag.q || []
        window.gtag.q.push(args)
      }
      window.gtag('js', new Date())
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return

    // Track page views
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname])

  return null
}

// Event tracking functions
export const analytics = {
  // Track book idea generation
  trackIdeaGeneration: (genre: string, bookType: string) => {
    if (!window.gtag) return
    
    window.gtag('event', 'generate_idea', {
      event_category: 'engagement',
      event_label: `${bookType}_${genre}`,
      value: 1,
    })
  },

  // Track idea saves
  trackIdeaSave: (ideaId: string, genre: string) => {
    if (!window.gtag) return
    
    window.gtag('event', 'save_idea', {
      event_category: 'engagement',
      event_label: genre,
      value: 1,
    })
  },

  // Track idea shares
  trackIdeaShare: (platform: string, genre: string) => {
    if (!window.gtag) return
    
    window.gtag('event', 'share', {
      event_category: 'social',
      event_label: `${platform}_${genre}`,
      method: platform,
    })
  },

  // Track resource page views
  trackResourceView: (resourceSlug: string) => {
    if (!window.gtag) return
    
    window.gtag('event', 'view_resource', {
      event_category: 'content',
      event_label: resourceSlug,
      value: 1,
    })
  },

  // Track search queries
  trackSearch: (query: string, resultsCount: number) => {
    if (!window.gtag) return
    
    window.gtag('event', 'search', {
      event_category: 'search',
      search_term: query,
      value: resultsCount,
    })
  },

  // Track conversion goals
  trackConversion: (goalName: string, value?: number) => {
    if (!window.gtag) return
    
    window.gtag('event', 'conversion', {
      event_category: 'goal',
      event_label: goalName,
      value: value || 1,
    })
  }
}

// Google Search Console verification
export function GoogleSearchConsole() {
  const verificationCode = process.env.NEXT_PUBLIC_GSC_VERIFICATION

  if (!verificationCode) return null

  return (
    <meta 
      name="google-site-verification" 
      content={verificationCode} 
    />
  )
}

// Microsoft Clarity (optional additional analytics)
export function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  useEffect(() => {
    if (!clarityId) return

    const script = document.createElement('script')
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `
    document.head.appendChild(script)
  }, [clarityId])

  return null
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: {
      (...args: any[]): void
      q?: any[]
    }
  }
}