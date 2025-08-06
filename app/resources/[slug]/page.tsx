import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// Import guide content
import { getGuideBySlug, getAllGuides } from '@/lib/guides'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  
  if (!guide) {
    return {
      title: 'Guide Not Found - BookSpark',
    }
  }

  return {
    title: `${guide.title} | Writing Guide - BookSpark`,
    description: guide.excerpt,
    keywords: guide.tags,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      url: `https://www.bookideasgenerator.online/resources/${guide.slug}`,
    },
    alternates: {
      canonical: `https://www.bookideasgenerator.online/resources/${guide.slug}`,
    },
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guide.title,
            "description": guide.excerpt,
            "author": {
              "@type": "Organization",
              "name": "BookSpark"
            },
            "publisher": {
              "@type": "Organization",
              "name": "BookSpark",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.bookideasgenerator.online/icons/icon-192x192.png"
              }
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.bookideasgenerator.online/resources/${guide.slug}`
            },
            "keywords": guide.tags.join(", "),
            "articleSection": guide.category,
            "wordCount": guide.content.split(' ').length,
            "timeRequired": guide.readTime,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.bookideasgenerator.online"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Writing Resources",
                  "item": "https://www.bookideasgenerator.online/resources"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": guide.title,
                  "item": `https://www.bookideasgenerator.online/resources/${guide.slug}`
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Article Header */}
        <article className="py-8 lg:py-16">
          <div className="container max-w-4xl">
            
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-teal-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <Link href="/resources" className="hover:text-teal-600 transition-colors">
                    Writing Resources
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{guide.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 text-sm font-semibold text-teal-700 bg-teal-100 rounded-full">
                  {guide.category}
                </span>
                <span className="text-sm text-gray-500">{guide.readTime}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {guide.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {guide.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:text-teal-700 prose-li:text-gray-700 prose-blockquote:border-teal-200 prose-blockquote:bg-teal-50 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />
            </div>

            {/* Related Guides */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guide.relatedGuides?.map((relatedSlug) => {
                  const relatedGuide = getGuideBySlug(relatedSlug)
                  if (!relatedGuide) return null
                  
                  return (
                    <Link 
                      key={relatedSlug}
                      href={`/resources/${relatedSlug}`}
                      className="block bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded">
                          {relatedGuide.category}
                        </span>
                        <span className="text-xs text-gray-500">{relatedGuide.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-teal-600 transition-colors">
                        {relatedGuide.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {relatedGuide.excerpt}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link
                  href="/resources"
                  className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to All Resources</span>
                </Link>
                
                <Link
                  href="/generator"
                  className="inline-flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105"
                >
                  <span>Generate Book Ideas</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}