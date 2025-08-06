import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romance Book Ideas Generator | 500+ Love Story Concepts - BookSpark',
  description: 'Generate unlimited romance book ideas instantly. From enemies-to-lovers to second chances, get creative love story concepts, characters, and plots for your next romance novel.',
  keywords: ['romance book ideas', 'love story generator', 'romance novel concepts', 'romantic plot ideas', 'enemies to lovers', 'second chance romance', 'fake dating tropes', 'romance writing prompts'],
  openGraph: {
    title: 'Romance Book Ideas Generator | 500+ Love Story Concepts',
    description: 'Generate unlimited romance book ideas instantly. Perfect for romance authors and writers looking for inspiration.',
    type: 'website',
    url: 'https://bookspark.vercel.app/romance-book-ideas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romance Book Ideas Generator | 500+ Love Story Concepts',
    description: 'Generate unlimited romance book ideas instantly. From enemies-to-lovers to second chances.',
  },
  alternates: {
    canonical: 'https://bookspark.vercel.app/romance-book-ideas',
  },
}

export default function RomanceIdeasPage() {
  const popularTropes = [
    {
      title: 'Enemies to Lovers',
      description: 'Two characters who start as adversaries gradually fall in love',
      examples: ['Rival CEOs', 'Political opponents', 'Sports competitors']
    },
    {
      title: 'Second Chance Romance',
      description: 'Former lovers reunite and rekindle their relationship',
      examples: ['High school sweethearts', 'Divorced couple', 'Military reunion']
    },
    {
      title: 'Fake Relationship',
      description: 'Characters pretend to be in a relationship for mutual benefit',
      examples: ['Wedding date', 'Business arrangement', 'Family pressure']
    },
    {
      title: 'Forbidden Love',
      description: 'Romance that faces external obstacles or societal barriers',
      examples: ['Boss/employee', 'Best friend\'s sibling', 'Royal/commoner']
    },
    {
      title: 'Friends to Lovers',
      description: 'Best friends realize their deeper feelings for each other',
      examples: ['Childhood friends', 'Roommates', 'Work colleagues']
    },
    {
      title: 'Opposites Attract',
      description: 'Characters with contrasting personalities fall in love',
      examples: ['City girl/country boy', 'Introvert/extrovert', 'Rich/poor']
    }
  ]

  const writingTips = [
    {
      title: 'Building Sexual Tension',
      tip: 'Use meaningful glances, accidental touches, and witty banter to create chemistry between characters.'
    },
    {
      title: 'Character Development',
      tip: 'Give each character personal growth arcs that complement their romantic journey.'
    },
    {
      title: 'Conflict Creation',
      tip: 'Internal conflicts (fears, past trauma) often create more compelling obstacles than external ones.'
    },
    {
      title: 'Dialogue Mastery',
      tip: 'Romance dialogue should reveal character, advance plot, and build emotional connection simultaneously.'
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Romance Book Ideas Generator",
            "description": "Generate unlimited romance book ideas instantly. From enemies-to-lovers to second chances, get creative love story concepts for your next romance novel.",
            "url": "https://bookspark.vercel.app/romance-book-ideas",
            "mainEntity": {
              "@type": "WebApplication",
              "name": "Romance Book Ideas Generator",
              "applicationCategory": "EntertainmentApplication",
              "operatingSystem": "Web Browser",
              "description": "AI-powered romance book idea generator for authors and writers",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bookspark.vercel.app"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Romance Book Ideas",
                  "item": "https://bookspark.vercel.app/romance-book-ideas"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Romance Book Ideas
                <span className="block text-pink-200">Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Create captivating love stories with our specialized romance book idea generator. 
                From meet-cute scenarios to happily-ever-afters, get unlimited inspiration for your next romance novel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#generator"
                  className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Generate Romance Ideas
                </Link>
                <Link
                  href="#tropes"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
                >
                  Browse Popular Tropes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Romance Tropes */}
        <section id="tropes" className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Popular Romance Tropes
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the most beloved romance tropes that readers can't get enough of
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularTropes.map((trope, index) => (
                <div key={trope.title} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-rose-600">
                    {trope.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {trope.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {trope.examples.map((example, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generator Section */}
        <section id="generator" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Start Your Romance Journey
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Use our AI-powered generator to create unique romance book ideas tailored to your preferences
              </p>
            </div>
            <BookGenerator />
          </div>
        </section>

        {/* Writing Tips */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Romance Writing Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master the art of writing compelling romance novels with these expert tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {writingTips.map((tip, index) => (
                <div key={tip.title} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
                  <h3 className="text-xl font-bold text-rose-600 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Explore More Genres
              </h2>
              <p className="text-gray-300 text-lg">
                Find inspiration across all your favorite book genres
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Mystery', href: '/mystery-plot-generator', icon: '🔍' },
                { name: 'Fantasy', href: '/fantasy-story-ideas', icon: '🐉' },
                { name: 'Sci-Fi', href: '/science-fiction-concepts', icon: '🚀' },
                { name: 'Thriller', href: '/thriller-book-ideas', icon: '⚡' },
                { name: 'Young Adult', href: '/young-adult-stories', icon: '📚' },
                { name: 'Children', href: '/children-book-ideas', icon: '🌟' },
              ].map((genre) => (
                <Link
                  key={genre.name}
                  href={genre.href}
                  className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-center transition-colors duration-300"
                >
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