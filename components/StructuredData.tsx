export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bookideasgenerator.online/#website",
        "url": "https://bookideasgenerator.online/",
        "name": "BookSpark",
        "description": "AI-powered book idea generator for writers, authors, and storytellers. Generate unlimited creative inspiration instantly.",
        "publisher": {
          "@id": "https://bookideasgenerator.online/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bookideasgenerator.online/generator?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "sameAs": [
          "https://twitter.com/BookSpark",
          "https://facebook.com/BookSpark"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://bookideasgenerator.online/#organization",
        "name": "BookSpark",
        "url": "https://bookideasgenerator.online/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://bookideasgenerator.online/#logo",
          "inLanguage": "en-US",
          "url": "https://bookideasgenerator.online/logo.png",
          "contentUrl": "https://bookideasgenerator.online/logo.png",
          "width": 512,
          "height": 512,
          "caption": "BookSpark"
        },
        "image": {
          "@id": "https://bookideasgenerator.online/#logo"
        },
        "description": "BookSpark is an AI-powered book idea generator that helps writers, authors, and storytellers create unlimited creative inspiration instantly.",
        "founder": {
          "@type": "Organization",
          "name": "BookSpark Team"
        },
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebApplication",
        "@id": "https://bookideasgenerator.online/#webapp",
        "name": "BookSpark Book Idea Generator",
        "description": "Generate unlimited book ideas for fiction and non-fiction genres instantly with AI-powered creativity.",
        "url": "https://bookideasgenerator.online/generator",
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "Web Browser",
        "browserRequirements": "Requires JavaScript",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "featureList": [
          "AI-powered book idea generation",
          "Fiction and non-fiction genres",
          "Character development tools",
          "Plot structure assistance",
          "Save and share ideas",
          "Mobile-friendly interface"
        ],
        "screenshot": {
          "@type": "ImageObject",
          "url": "https://bookideasgenerator.online/screenshot.png",
          "caption": "BookSpark Book Idea Generator Interface"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the book idea generator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BookSpark uses AI algorithms to combine various story elements like characters, settings, conflicts, and themes based on your selected genre and preferences. It generates unique book concepts with detailed plots, character descriptions, and opening lines."
        }
      },
      {
        "@type": "Question",
        "name": "Is BookSpark free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BookSpark is completely free to use. You can generate unlimited book ideas, save your favorites, and access all features without any cost or subscription."
        }
      },
      {
        "@type": "Question",
        "name": "What genres does BookSpark support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BookSpark supports multiple fiction genres including Romance, Mystery, Fantasy, Science Fiction, Thriller, and Horror. It also includes non-fiction categories like Self-Help, Biography, Business, Health, Travel, and Cooking."
        }
      },
      {
        "@type": "Question",
        "name": "Can I save and share my generated book ideas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can save your favorite book ideas to your browser's local storage and easily share them via social media, email, or by copying the formatted text to your clipboard."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the generated ideas for commercial purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can use the generated book ideas for commercial purposes including writing and publishing books. The ideas are generated as creative inspiration and are not copyrighted."
        }
      },
      {
        "@type": "Question",
        "name": "How many book ideas can I generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no limit to the number of book ideas you can generate with BookSpark. You can create as many concepts as you need for your writing projects."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}