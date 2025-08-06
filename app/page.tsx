import HeroSection from '@/components/HeroSection'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Genre',
      description: 'Select fiction or non-fiction and pick your preferred genre',
      icon: '📚',
      color: 'primary'
    },
    {
      number: '2', 
      title: 'Set Preferences',
      description: 'Choose your target audience, tone, and book length',
      icon: '⚙️',
      color: 'accent'
    },
    {
      number: '3',
      title: 'Generate Ideas',
      description: 'Get unique, creative book ideas with detailed concepts',
      icon: '✨',
      color: 'primary'
    }
  ]

  const features = [
    {
      title: 'Unlimited Ideas',
      description: 'Generate as many book concepts as you need',
      icon: '♾️'
    },
    {
      title: 'Rich Details',
      description: 'Complete with characters, settings, and plot elements',
      icon: '📝'
    },
    {
      title: 'Save Favorites',
      description: 'Keep track of your best ideas for future reference',
      icon: '❤️'
    },
    {
      title: 'Export & Share',
      description: 'Share your concepts with writing partners and editors',
      icon: '📤'
    }
  ]

  return (
    <main>
      <Navigation />
      <HeroSection />
      
      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How BookSpark Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Generate unique book ideas in three simple steps and start writing your next bestseller
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center group">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-${step.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl lg:text-4xl">{step.icon}</span>
                </div>
                <div className={`w-8 h-8 bg-${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg`}>
                  {step.number}
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/generator"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Try It Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Start Writing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              BookSpark provides comprehensive book concepts with all the elements you need to begin your writing journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:scale-105">
                <div className="text-4xl lg:text-5xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Ignite Your Next Story?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of writers who have found their inspiration with BookSpark
          </p>
          <Link
            href="/generator"
            className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Generate Your First Idea</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}