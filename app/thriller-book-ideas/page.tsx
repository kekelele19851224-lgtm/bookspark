import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thriller Book Ideas Generator | Suspense & Action Plot Ideas - BookSpark',
  description: 'Generate heart-pounding thriller and suspense story ideas instantly. Create psychological thrillers, action adventures, and edge-of-your-seat plots.',
  keywords: ['thriller book ideas', 'suspense story generator', 'psychological thriller plots', 'action thriller concepts', 'spy thriller ideas'],
  alternates: { canonical: 'https://bookideasgenerator.online/thriller-book-ideas' },
}

export default function ThrillerBookIdeasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Thriller Book Ideas Generator",
          "url": "https://bookideasgenerator.online/thriller-book-ideas"
        })
      }} />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        <section className="py-16 lg:py-24 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Thriller Book Ideas
                <span className="block text-orange-300">Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Create heart-pounding suspense and action-packed adventures. Generate psychological thrillers, 
                spy novels, and edge-of-your-seat stories that keep readers turning pages.
              </p>
              <Link href="#generator" className="bg-orange-400 text-orange-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-300 transition-all duration-300 hover:scale-105 shadow-lg">
                Generate Thriller Ideas
              </Link>
            </div>
          </div>
        </section>

        <section id="generator" className="py-16 lg:py-24">
          <div className="container max-w-6xl">
            <BookGenerator />
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Romance', href: '/romance-book-ideas', icon: '💕' },
                { name: 'Mystery', href: '/mystery-plot-generator', icon: '🔍' },
                { name: 'Fantasy', href: '/fantasy-story-ideas', icon: '🐉' },
                { name: 'Sci-Fi', href: '/science-fiction-concepts', icon: '🚀' },
                { name: 'Young Adult', href: '/young-adult-stories', icon: '📚' },
                { name: 'Children', href: '/children-book-ideas', icon: '🌟' },
              ].map((genre) => (
                <Link key={genre.name} href={genre.href} className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-center transition-colors duration-300">
                  <div className="text-2xl mb-2">{genre.icon}</div>
                  <div className="font-semibold">{genre.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}