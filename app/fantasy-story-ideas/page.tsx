import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fantasy Story Ideas Generator | Epic Fantasy & Urban Fantasy Plots - BookSpark',
  description: 'Generate magical fantasy story ideas instantly. Create epic fantasy worlds, urban fantasy plots, magical systems, and mythical creatures for your next fantasy novel.',
  keywords: ['fantasy story ideas', 'epic fantasy plots', 'urban fantasy concepts', 'magical world building', 'fantasy novel ideas', 'dragon stories', 'magic system ideas', 'fantasy writing prompts'],
  openGraph: {
    title: 'Fantasy Story Ideas Generator | Epic Fantasy & Urban Fantasy Plots',
    description: 'Generate magical fantasy story ideas instantly. Perfect for fantasy authors and world builders.',
    type: 'website',
    url: 'https://bookideasgenerator.online/fantasy-story-ideas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fantasy Story Ideas Generator | Epic Fantasy & Urban Fantasy Plots',
    description: 'Generate magical fantasy story ideas instantly.',
  },
  alternates: {
    canonical: 'https://bookideasgenerator.online/fantasy-story-ideas',
  },
}

export default function FantasyStoryIdeasPage() {
  const fantasySubgenres = [
    {
      title: 'Epic Fantasy',
      description: 'Grand-scale adventures in fully realized secondary worlds',
      elements: ['Secondary world', 'Magic systems', 'Epic quests', 'Complex politics']
    },
    {
      title: 'Urban Fantasy',
      description: 'Magical elements integrated into modern, real-world settings',
      elements: ['Modern setting', 'Hidden magic', 'Supernatural beings', 'Urban environment']
    },
    {
      title: 'Dark Fantasy',
      description: 'Fantasy with horror elements and darker themes',
      elements: ['Horror elements', 'Dark magic', 'Moral ambiguity', 'Gothic atmosphere']
    },
    {
      title: 'Romantic Fantasy',
      description: 'Fantasy stories with central romantic relationships',
      elements: ['Romance focus', 'Magical elements', 'Character-driven', 'Emotional stakes']
    },
    {
      title: 'Portal Fantasy',
      description: 'Characters travel from our world to a magical realm',
      elements: ['World travel', 'Fish out of water', 'Discovery', 'Dual worlds']
    },
    {
      title: 'Sword & Sorcery',
      description: 'Action-packed adventures with magic and combat',
      elements: ['Action focus', 'Magic and weapons', 'Adventure', 'Heroes and villains']
    }
  ]

  const worldBuildingElements = [
    {
      category: 'Magic Systems',
      items: ['Elemental magic', 'Rune-based', 'Potion brewing', 'Blood magic', 'Divine power', 'Necromancy', 'Illusion magic', 'Time manipulation']
    },
    {
      category: 'Mythical Creatures',
      items: ['Dragons', 'Phoenixes', 'Unicorns', 'Griffins', 'Basilisks', 'Kelpies', 'Banshees', 'Chimeras']
    },
    {
      category: 'Fantasy Races',
      items: ['Elves', 'Dwarves', 'Orcs', 'Halflings', 'Faeries', 'Merfolk', 'Centaurs', 'Shapeshifters']
    },
    {
      category: 'Magical Items',
      items: ['Enchanted weapons', 'Healing potions', 'Scrying orbs', 'Portal stones', 'Cloaks of invisibility', 'Memory crystals', 'Time hourglasses', 'Elemental gems']
    }
  ]

  const writingTips = [
    {
      title: 'Magic System Rules',
      tip: 'Establish clear rules and limitations for your magic system to maintain consistency and tension.'
    },
    {
      title: 'World Building',
      tip: 'Create detailed histories, cultures, and languages that feel authentic and lived-in.'
    },
    {
      title: 'Character Motivation',
      tip: 'Give your characters personal stakes beyond saving the world - what do they personally need?'
    },
    {
      title: 'Balancing Exposition',
      tip: 'Reveal your world gradually through action and dialogue rather than info-dumping.'
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
            "name": "Fantasy Story Ideas Generator",
            "description": "Generate magical fantasy story ideas instantly. Create epic fantasy worlds, urban fantasy plots, magical systems, and mythical creatures for your next fantasy novel.",
            "url": "https://bookideasgenerator.online/fantasy-story-ideas",
            "mainEntity": {
              "@type": "WebApplication",
              "name": "Fantasy Story Ideas Generator",
              "applicationCategory": "EntertainmentApplication",
              "operatingSystem": "Web Browser",
              "description": "AI-powered fantasy story generator for authors and world builders",
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
                  "item": "https://bookideasgenerator.online"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Fantasy Story Ideas",
                  "item": "https://bookideasgenerator.online/fantasy-story-ideas"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Fantasy Story
                <span className="block text-purple-300">Ideas Generator</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Create magical worlds and epic adventures with our fantasy story generator. 
                From dragon-filled kingdoms to urban magic, craft the perfect fantasy tale for your readers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#generator"
                  className="bg-purple-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Generate Fantasy Ideas
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

        {/* Fantasy Subgenres */}
        <section id="subgenres" className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Fantasy Subgenres
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Explore different realms of fantasy fiction and find your magical niche
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fantasySubgenres.map((subgenre, index) => (
                <div key={subgenre.title} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-purple-700">
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
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
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

        {/* World Building Elements */}
        <section className="py-16 lg:py-24 bg-indigo-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                World Building Elements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential components for creating rich, immersive fantasy worlds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {worldBuildingElements.map((category, index) => (
                <div key={category.category} className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                  <h3 className="text-lg font-bold text-purple-700 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
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
                Craft Your Fantasy World
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Generate unique fantasy stories with magical elements, epic quests, and unforgettable characters
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
                Fantasy Writing Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Master the art of fantasy writing with these world-building techniques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {writingTips.map((tip, index) => (
                <div key={tip.title} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-700 mb-3">
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
                { name: 'Mystery', href: '/mystery-plot-generator', icon: '🔍' },
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