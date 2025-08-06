import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mystery Plot Generator | 1000+ Crime & Detective Story Ideas - BookSpark',
  description: 'Generate compelling mystery and detective story plots instantly. Get unique crime scenarios, suspects, clues, and plot twists for your next mystery novel.',
  keywords: ['mystery plot generator', 'detective story ideas', 'crime fiction plots', 'mystery novel concepts', 'whodunit plots', 'cozy mystery ideas', 'police procedural plots'],
  openGraph: {
    title: 'Mystery Plot Generator | 1000+ Crime & Detective Story Ideas',
    description: 'Generate compelling mystery and detective story plots instantly. Perfect for mystery authors and crime fiction writers.',
    type: 'website',
    url: 'https://bookspark.vercel.app/mystery-plot-generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystery Plot Generator | 1000+ Crime & Detective Story Ideas',
    description: 'Generate compelling mystery and detective story plots instantly.',
  },
  alternates: {
    canonical: 'https://bookspark.vercel.app/mystery-plot-generator',
  },
}

export default function MysteryPlotGeneratorPage() {
  const mysterySubgenres = [
    {
      title: 'Cozy Mystery',
      description: 'Amateur sleuth in small community, minimal violence, puzzle-focused',
      elements: ['Amateur detective', 'Small town setting', 'Minimal gore', 'Series potential']
    },
    {
      title: 'Police Procedural',
      description: 'Professional law enforcement solving crimes using realistic methods',
      elements: ['Professional detectives', 'Realistic investigation', 'Team dynamics', 'Legal procedures']
    },
    {
      title: 'Psychological Thriller',
      description: 'Focus on characters\' mental states and psychological manipulation',
      elements: ['Unreliable narrator', 'Mind games', 'Psychological tension', 'Character study']
    },
    {
      title: 'Historical Mystery',
      description: 'Crime solving set in past eras with period-accurate details',
      elements: ['Historical setting', 'Period research', 'Social context', 'Authentic details']
    },
    {
      title: 'Locked Room Mystery',
      description: 'Crime committed in seemingly impossible circumstances',
      elements: ['Impossible crime', 'Logical solution', 'Clever clues', 'Ingenious method']
    },
    {
      title: 'Hardboiled Detective',
      description: 'Tough private investigator in gritty urban environment',
      elements: ['Private eye', 'Urban setting', 'Moral ambiguity', 'Noir atmosphere']
    }
  ]

  const plotElements = [
    {
      category: 'Crime Types',
      items: ['Murder', 'Theft', 'Kidnapping', 'Fraud', 'Blackmail', 'Arson', 'Espionage', 'Art forgery']
    },
    {
      category: 'Settings',
      items: ['Country manor', 'Cruise ship', 'Small town', 'University', 'Theater', 'Museum', 'Hospital', 'Island']
    },
    {
      category: 'Motives',
      items: ['Revenge', 'Greed', 'Love', 'Fear', 'Jealousy', 'Power', 'Secrets', 'Survival']
    },
    {
      category: 'Red Herrings',
      items: ['False alibis', 'Misleading evidence', 'Suspicious behavior', 'Hidden relationships', 'Past connections']
    }
  ]

  const writingTips = [
    {
      title: 'Fair Play Rules',
      tip: 'Give readers all the clues they need to solve the mystery alongside your detective.'
    },
    {
      title: 'Red Herrings',
      tip: 'Plant false clues that mislead without being unfair - they should make logical sense initially.'
    },
    {
      title: 'Character Motives',
      tip: 'Every suspect needs a believable motive, means, and opportunity for the crime.'
    },
    {
      title: 'Pacing',
      tip: 'Balance investigation scenes with character development and rising tension.'
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
            "name": "Mystery Plot Generator",
            "description": "Generate compelling mystery and detective story plots instantly. Get unique crime scenarios, suspects, clues, and plot twists for your next mystery novel.",
            "url": "https://bookspark.vercel.app/mystery-plot-generator",
            "mainEntity": {
              "@type": "WebApplication",
              "name": "Mystery Plot Generator",
              "applicationCategory": "EntertainmentApplication",
              "operatingSystem": "Web Browser",
              "description": "AI-powered mystery plot generator for crime fiction authors",
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
                  "name": "Mystery Plot Generator",
                  "item": "https://bookspark.vercel.app/mystery-plot-generator"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mystery Plot
                <span className="block text-yellow-400">Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Craft compelling crime stories with our specialized mystery plot generator. 
                Create intricate whodunits, police procedurals, and psychological thrillers with unique twists and clues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#generator"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Generate Mystery Plot
                </Link>
                <Link
                  href="#subgenres"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Subgenres
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mystery Subgenres */}
        <section id="subgenres" className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mystery Subgenres
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover different types of mystery stories and find your perfect style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mysterySubgenres.map((subgenre, index) => (
                <div key={subgenre.title} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-slate-700">
                    {subgenre.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {subgenre.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Elements:</h4>
                    <ul className="space-y-1">
                      {subgenre.elements.map((element, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plot Elements */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Mystery Plot Elements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential components for building compelling mystery stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plotElements.map((category, index) => (
                <div key={category.category} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-slate-700 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
                Create Your Mystery
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Generate unique mystery plots with compelling crimes, suspects, and twists
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
                Mystery Writing Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master the craft of mystery writing with these expert techniques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {writingTips.map((tip, index) => (
                <div key={tip.title} className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-700 mb-3">
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
                { name: 'Romance', href: '/romance-book-ideas', icon: '💕' },
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