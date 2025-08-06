import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Children\'s Book Ideas Generator | Kids Story Concepts & Plots - BookSpark',
  description: 'Generate delightful children\'s story ideas instantly. Create picture books, chapter books, and middle-grade fiction with educational and entertaining plots.',
  keywords: ['children book ideas', 'kids story generator', 'picture book concepts', 'middle grade fiction', 'children story plots'],
  alternates: { canonical: 'https://bookspark.vercel.app/children-book-ideas' },
}

export default function ChildrenBookIdeasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Children's Book Ideas Generator",
          "url": "https://bookspark.vercel.app/children-book-ideas"
        })
      }} />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Children's Book Ideas
                <span className="block text-yellow-200">Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Create magical stories for young readers. Generate picture books, chapter books, 
                and middle-grade adventures that educate, entertain, and inspire children.
              </p>
              <Link href="#generator" className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Generate Kids' Ideas
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
                { name: 'Young Adult', href: '/young-adult-stories', icon: '📚' },
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