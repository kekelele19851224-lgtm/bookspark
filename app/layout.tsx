import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WebsiteStructuredData, FAQStructuredData } from '@/components/StructuredData'
import { GoogleAnalytics, GoogleSearchConsole } from '@/components/Analytics'
import PWAInstaller from '@/components/PWAInstaller'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#6366f1',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bookspark.vercel.app'),
  title: 'BookSpark - Book Ideas Generator | Instant Story Concepts for Writers',
  description: 'Generate unlimited book ideas in seconds. AI-powered story concepts, plot generators, and writing prompts for fiction and non-fiction authors.',
  keywords: ['book ideas generator', 'story generator', 'plot ideas', 'writing prompts', 'novel concepts', 'fiction ideas', 'book inspiration', 'creative writing', 'author tools', 'storytelling', 'book concepts', 'writing inspiration'],
  authors: [{ name: 'BookSpark' }],
  creator: 'BookSpark',
  publisher: 'BookSpark',
  applicationName: 'BookSpark',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'BookSpark - Ignite Your Next Story',
    description: 'Generate unlimited creative book ideas instantly. Perfect for writers, authors, and storytellers.',
    url: 'https://bookspark.vercel.app',
    siteName: 'BookSpark',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BookSpark - Book Ideas Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookSpark - Book Ideas Generator',
    description: 'Generate unlimited book ideas in seconds',
    images: ['/og-image.png'],
    creator: '@BookSpark',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* iOS PWA Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BookSpark" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        
        {/* Additional PWA Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        
        <GoogleSearchConsole />
        <WebsiteStructuredData />
        <FAQStructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <div className="h-safe-area-inset-bottom" />
        </div>
        <PWAInstaller />
        <GoogleAnalytics />
      </body>
    </html>
  )
}