import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing Resources & Tips | Author Guides & Tutorials - BookSpark',
  description: 'Comprehensive writing resources for authors. Learn character development, plot structure, world building, dialogue writing, and publishing tips from experts.',
  keywords: ['writing resources', 'author guides', 'writing tips', 'character development', 'plot structure', 'world building', 'dialogue writing', 'publishing advice'],
  openGraph: {
    title: 'Writing Resources & Tips | Author Guides & Tutorials',
    description: 'Comprehensive writing resources for authors and aspiring writers.',
    type: 'website',
    url: 'https://bookspark.vercel.app/resources',
  },
  alternates: {
    canonical: 'https://bookspark.vercel.app/resources',
  },
}

const writingTips = [
  {
    title: "How to Develop Compelling Characters",
    excerpt: "Learn the secrets to creating memorable characters that readers will love. From backstory to character arcs, master the art of character development.",
    slug: "develop-compelling-characters",
    category: "Character Development",
    readTime: "8 min read",
    tags: ["characters", "development", "backstory", "motivation"]
  },
  {
    title: "Master Plot Structure: The Three-Act Formula",
    excerpt: "Understand the fundamentals of story structure that keep readers engaged from beginning to end. Learn setup, confrontation, and resolution.",
    slug: "master-plot-structure",
    category: "Plot & Structure",
    readTime: "12 min read",
    tags: ["plot", "structure", "pacing", "story-arc"]
  },
  {
    title: "World Building for Fantasy and Sci-Fi",
    excerpt: "Create immersive worlds that feel authentic and lived-in. From magic systems to alien cultures, build believable fictional universes.",
    slug: "world-building-guide",
    category: "World Building",
    readTime: "15 min read",
    tags: ["worldbuilding", "fantasy", "sci-fi", "magic-systems"]
  },
  {
    title: "Writing Natural Dialogue That Flows",
    excerpt: "Master the art of dialogue that sounds natural while advancing your plot and revealing character. Avoid common dialogue mistakes.",
    slug: "writing-natural-dialogue",
    category: "Dialogue",
    readTime: "10 min read",
    tags: ["dialogue", "conversation", "voice", "character-voice"]
  },
  {
    title: "Show Don't Tell: Advanced Techniques",
    excerpt: "Go beyond basic writing advice and learn sophisticated techniques for showing emotion, action, and information through scene and subtext.",
    slug: "show-dont-tell-techniques",
    category: "Writing Craft",
    readTime: "11 min read",
    tags: ["show-dont-tell", "subtext", "scenes", "emotion"]
  },
  {
    title: "Creating Believable Romantic Tension",
    excerpt: "Build chemistry between characters that feels genuine and compelling. Learn pacing, conflict, and emotional development in romance.",
    slug: "romantic-tension-guide",
    category: "Romance Writing",
    readTime: "9 min read",
    tags: ["romance", "tension", "chemistry", "relationships"]
  },
  {
    title: "Mystery Writing: Clues, Red Herrings & Fair Play",
    excerpt: "Learn to craft intricate mysteries that challenge readers while playing fair. Master the art of misdirection and revelation.",
    slug: "mystery-writing-guide",
    category: "Genre Writing",
    readTime: "13 min read",
    tags: ["mystery", "clues", "red-herrings", "plot-twists"]
  },
  {
    title: "Building Suspense and Tension",
    excerpt: "Keep readers on the edge of their seats with proven techniques for creating and maintaining suspense throughout your story.",
    slug: "building-suspense-tension",
    category: "Writing Craft",
    readTime: "7 min read",
    tags: ["suspense", "tension", "pacing", "conflict"]
  },
  {
    title: "Self-Publishing vs Traditional Publishing",
    excerpt: "Compare publishing paths to find what works for your goals. Understand the pros, cons, and requirements of each approach.",
    slug: "publishing-paths-comparison",
    category: "Publishing",
    readTime: "14 min read",
    tags: ["publishing", "self-publishing", "traditional", "author-career"]
  },
  {
    title: "Research Techniques for Fiction Writers",
    excerpt: "Conduct effective research that enhances your fiction without overwhelming your story. Find reliable sources and fact-check your work.",
    slug: "research-techniques-fiction",
    category: "Writing Process",
    readTime: "10 min read",
    tags: ["research", "accuracy", "sources", "fact-checking"]
  }
]

const categories = [
  { name: 'Character Development', count: 2, color: 'bg-blue-100 text-blue-800' },
  { name: 'Plot & Structure', count: 2, color: 'bg-green-100 text-green-800' },
  { name: 'World Building', count: 1, color: 'bg-purple-100 text-purple-800' },
  { name: 'Writing Craft', count: 3, color: 'bg-orange-100 text-orange-800' },
  { name: 'Genre Writing', count: 1, color: 'bg-red-100 text-red-800' },
  { name: 'Publishing', count: 1, color: 'bg-indigo-100 text-indigo-800' },
]

const quickTips = [
  {
    title: "Daily Writing Habit",
    tip: "Write for just 15 minutes every day. Consistency beats intensity for building a sustainable writing practice."
  },
  {
    title: "Read in Your Genre",
    tip: "Read extensively in your genre to understand reader expectations, current trends, and market standards."
  },
  {
    title: "Join a Writing Community",
    tip: "Connect with other writers for feedback, support, and accountability. Online communities can be just as valuable as local groups."
  },
  {
    title: "Keep a Writing Journal",
    tip: "Track your progress, ideas, and insights. A writing journal helps you identify patterns and celebrate growth."
  }
]

export default function ResourcesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Writing Resources & Tips",
            "description": "Comprehensive writing resources for authors. Learn character development, plot structure, world building, and more.",
            "url": "https://bookspark.vercel.app/resources",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Writing Resources",
              "description": "Collection of writing guides and tutorials",
              "numberOfItems": writingTips.length,
              "itemListElement": writingTips.map((tip, index) => ({
                "@type": "Article",
                "position": index + 1,
                "name": tip.title,
                "description": tip.excerpt,
                "url": `https://bookspark.vercel.app/resources/${tip.slug}`,
                "author": {
                  "@type": "Organization",
                  "name": "BookSpark"
                },
                "publisher": {
                  "@type": "Organization", 
                  "name": "BookSpark"
                }
              }))
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
                  "name": "Writing Resources",
                  "item": "https://bookspark.vercel.app/resources"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Writing Resources
                <span className="block text-emerald-200">& Expert Tips</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Master your craft with our comprehensive collection of writing guides, tutorials, and expert advice. 
                From character development to publishing, everything you need to succeed as an author.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Browse Writing Guides
                </Link>
                <Link
                  href="#tips"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300"
                >
                  Quick Tips
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the writing advice you need, organized by topic
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div key={category.name} className="text-center">
                  <div className={`${category.color} rounded-xl p-4 mb-2 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}>
                    <div className="font-semibold text-sm mb-1">
                      {category.name}
                    </div>
                    <div className="text-xs opacity-75">
                      {category.count} {category.count === 1 ? 'guide' : 'guides'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing Guides */}
        <section id="guides" className="py-16 lg:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Writing Guides
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth tutorials and guides to help you master every aspect of the writing craft
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {writingTips.map((tip, index) => (
                <article key={tip.slug} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
                        {tip.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {tip.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors duration-200">
                      {tip.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {tip.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {tip.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/resources/${tip.slug}`}
                        className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>Read Guide</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section id="tips" className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quick Writing Tips
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bite-sized advice you can implement immediately to improve your writing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quickTips.map((tip, index) => (
                <div key={tip.title} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="text-lg font-bold text-teal-700 mb-3">
                    💡 {tip.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Writing?
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Use our book idea generator to find your next story concept and start applying these writing techniques
            </p>
            <Link
              href="/generator"
              className="inline-flex items-center space-x-3 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Generate Book Ideas</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}