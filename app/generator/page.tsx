import Navigation from '@/components/Navigation'
import BookGenerator from '@/components/BookGenerator'

export const metadata = {
  title: 'Book Ideas Generator - BookSpark',
  description: 'Generate unique book ideas for fiction and non-fiction books. Choose your genre, preferences, and get creative inspiration.',
}

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Book Ideas Generator
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Create unique, inspiring book concepts tailored to your preferences in seconds
            </p>
          </div>
          
          <BookGenerator />
        </div>
      </section>
    </main>
  )
}