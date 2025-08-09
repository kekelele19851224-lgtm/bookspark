import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Young Adult Story Ideas Generator | YA Book Concepts & Plots - BookSpark',
  description: 'Generate compelling young adult story ideas instantly. Create YA romance, dystopian, fantasy, and contemporary fiction plots for teen readers.',
  keywords: ['young adult story ideas', 'YA book generator', 'teen fiction plots', 'YA romance ideas', 'dystopian YA concepts'],
  alternates: { canonical: 'https://bookideasgenerator.online/young-adult-stories' },
}

export default function YoungAdultStoriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Young Adult Story Ideas Generator",
          "url": "https://bookideasgenerator.online/young-adult-stories"
        })
      }} />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Young Adult Stories
                <span className="block text-cyan-300">Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Create compelling stories for teen readers. Generate YA romance, dystopian adventures, 
                coming-of-age tales, and contemporary fiction that resonates with young adults.
              </p>
              <Link href="#generator" className="bg-cyan-400 text-cyan-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 shadow-lg">
                Generate YA Ideas
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
                { name: 'Thriller', href: '/thriller-book-ideas', icon: '⚡' },
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