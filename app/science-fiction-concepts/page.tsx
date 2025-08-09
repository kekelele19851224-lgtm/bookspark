import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Science Fiction Concepts Generator | Sci-Fi Story Ideas & Plots - BookSpark',
  description: 'Generate futuristic science fiction story concepts instantly. Create space opera, cyberpunk, dystopian, and hard sci-fi plots with advanced technology and alien worlds.',
  keywords: ['science fiction ideas', 'sci-fi story generator', 'space opera plots', 'cyberpunk concepts', 'dystopian fiction', 'hard science fiction', 'alien invasion stories', 'time travel plots'],
  openGraph: {
    title: 'Science Fiction Concepts Generator | Sci-Fi Story Ideas & Plots',
    description: 'Generate futuristic science fiction story concepts instantly. Perfect for sci-fi authors and speculative fiction writers.',
    type: 'website',
    url: 'https://bookideasgenerator.online/science-fiction-concepts',
  },
  alternates: {
    canonical: 'https://bookideasgenerator.online/science-fiction-concepts',
  },
}

export default function ScienceFictionConceptsPage() {
  const scifiSubgenres = [
    {
      title: 'Space Opera',
      description: 'Epic adventures across galaxies with grand-scale conflicts',
      elements: ['Galactic empires', 'Space battles', 'Advanced technology', 'Multiple worlds']
    },
    {
      title: 'Cyberpunk',
      description: 'High-tech, low-life stories in corporate-dominated futures',
      elements: ['Virtual reality', 'Corporate control', 'Cybernetic implants', 'Urban dystopia']
    },
    {
      title: 'Hard Science Fiction',
      description: 'Scientifically accurate speculation about future technology',
      elements: ['Scientific accuracy', 'Realistic physics', 'Technological focus', 'Exploration themes']
    },
    {
      title: 'Dystopian Fiction',
      description: 'Societies where something has gone terribly wrong',
      elements: ['Oppressive government', 'Social control', 'Rebellion themes', 'Loss of freedom']
    },
    {
      title: 'Time Travel',
      description: 'Stories involving movement through different time periods',
      elements: ['Temporal mechanics', 'Paradoxes', 'Historical changes', 'Cause and effect']
    },
    {
      title: 'First Contact',
      description: 'Humanity\'s first encounter with alien civilizations',
      elements: ['Alien species', 'Communication barriers', 'Cultural exchange', 'Peaceful or hostile']
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Science Fiction Concepts Generator",
            "description": "Generate futuristic science fiction story concepts instantly.",
            "url": "https://bookideasgenerator.online/science-fiction-concepts"
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Science Fiction
                <span className="block text-blue-300">Concepts Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Explore the future with our sci-fi story generator. Create space operas, cyberpunk adventures, 
                time travel tales, and dystopian worlds that push the boundaries of imagination.
              </p>
              <Link
                href="#generator"
                className="bg-blue-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-300 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Generate Sci-Fi Ideas
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sci-Fi Subgenres
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scifiSubgenres.map((subgenre, index) => (
                <div key={subgenre.title} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    {subgenre.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {subgenre.description}
                  </p>
                  <ul className="space-y-1">
                    {subgenre.elements.map((element, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="generator" className="py-16 lg:py-24 bg-gray-50">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Explore the Future
              </h2>
            </div>
            <BookGenerator />
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore More Genres</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Romance', href: '/romance-book-ideas', icon: '💕' },
                { name: 'Mystery', href: '/mystery-plot-generator', icon: '🔍' },
                { name: 'Fantasy', href: '/fantasy-story-ideas', icon: '🐉' },
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