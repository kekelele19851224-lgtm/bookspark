import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'About BookSpark - Book Ideas Generator',
  description: 'Learn about BookSpark, the professional book ideas generator that helps writers ignite their next story.',
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About BookSpark
            </h1>
            <p className="text-xl text-gray-600">
              Ignite Your Next Story
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                BookSpark was created to help writers overcome one of the biggest challenges in the creative process: 
                finding that perfect book idea. Whether you&apos;re a seasoned author or just starting your writing journey, 
                we believe that everyone has a story to tell. Our mission is to provide the spark of inspiration that 
                transforms a blank page into your next great book.
              </p>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-accent">How It Works</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BookSpark uses carefully curated templates and creative algorithms to generate unique book ideas 
                tailored to your preferences. Our system combines:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Genre-specific elements and tropes
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Character archetypes and development frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Setting variations and world-building elements
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Conflict structures and plot devices
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Theme exploration and meaningful messages
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">For Every Writer</h2>
              <p className="text-gray-700 leading-relaxed">
                BookSpark supports both fiction and non-fiction writers across all experience levels. 
                Whether you&apos;re looking to write a children&apos;s picture book, a young adult fantasy novel, 
                or a serious non-fiction work, our generator adapts to your specific needs and preferences. 
                Each generated idea comes with detailed elements to help you develop your concept further.
              </p>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-accent">Privacy & Ownership</h2>
              <p className="text-gray-700 leading-relaxed">
                All book ideas generated through BookSpark are completely yours to use. We don&apos;t store your 
                generated ideas or claim any ownership over the concepts you create. Your creativity and the 
                stories you develop from our prompts belong entirely to you. BookSpark is simply here to 
                provide the initial spark – the rest is your unique creative vision.
              </p>
            </div>
            
            <div className="card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ready to Get Started?</h2>
                <p className="text-gray-700 mb-6">
                  Join thousands of writers who have found their next book idea with BookSpark.
                </p>
                <a 
                  href="/generator" 
                  className="btn-primary inline-block"
                >
                  Generate Your Book Idea
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}