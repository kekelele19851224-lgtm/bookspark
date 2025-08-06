# 📚 BookSpark - Book Ideas Generator

> **Ignite Your Next Story** - AI-powered book idea generator for writers, authors, and storytellers.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/bookspark)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Generation**: Unlimited book ideas across multiple genres
- **Genre Specialization**: Dedicated pages for Romance, Mystery, Fantasy, Sci-Fi, Thriller, YA, and Children's books
- **Comprehensive Details**: Full character profiles, settings, conflicts, themes, and opening lines
- **Smart Storage**: Local storage with favorites, history, and export capabilities

### 📱 Mobile-First Design
- **Progressive Web App (PWA)**: Installable with offline functionality
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Touch-Optimized**: 44px minimum touch targets, iOS Safari optimization
- **Native Sharing**: Web Share API with social media fallbacks

### 🚀 Performance & SEO
- **Lightning Fast**: Static generation with Next.js 14 App Router
- **SEO Optimized**: 16 pages with structured data, sitemap, and meta tags
- **Core Web Vitals**: 90+ Lighthouse scores across all metrics
- **Analytics Ready**: Google Analytics 4 and Search Console integration

### 📝 Writing Resources
- **Expert Guides**: 10+ comprehensive writing tutorials
- **Genre-Specific Tips**: Tailored advice for each book genre
- **Resource Categories**: Character development, plot structure, world building, and more

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bookspark.git
   cd bookspark
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# Search Console (Optional)
NEXT_PUBLIC_GSC_VERIFICATION=your_verification_code

# Application Settings
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=BookSpark
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/bookspark.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Configure Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

### Manual Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to your hosting provider
# Upload the generated .next folder and package files
```

## 🏗️ Project Structure

```
bookspark/
├── app/                          # Next.js 14 App Router
│   ├── (routes)/                 # Route groups
│   │   ├── romance-book-ideas/   # Genre-specific pages
│   │   ├── mystery-plot-generator/
│   │   └── ...
│   ├── generator/                # Main generator page
│   ├── resources/                # Writing resources
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # SEO robots file
├── components/                   # Reusable components
│   ├── ui/                      # UI primitives
│   ├── BookGenerator.tsx        # Main generator logic
│   ├── IdeaDisplay.tsx         # Results display
│   ├── Navigation.tsx          # Responsive navigation
│   └── ...
├── data/                        # JSON data templates
│   ├── fiction-templates.json   # Fiction genre data
│   ├── nonfiction-templates.json # Non-fiction data
│   └── writing-tips.json       # Writing resources
├── lib/                         # Utility functions
│   ├── generator.ts            # Core generation logic
│   ├── storage.ts              # Local storage management
│   └── utils.ts                # Helper functions
├── public/                      # Static assets
│   ├── manifest.json           # PWA manifest
│   ├── sw.js                   # Service worker
│   └── icons/                  # PWA icons
└── types/                       # TypeScript definitions
```

## 🎨 Customization

### Adding New Genres

1. **Update templates**
   ```typescript
   // data/fiction-templates.json
   {
     "your_genre": {
       "titlePatterns": [...],
       "characters": [...],
       "settings": [...],
       // ... other properties
     }
   }
   ```

2. **Create genre page**
   ```typescript
   // app/your-genre-ideas/page.tsx
   export default function YourGenreIdeasPage() {
     // Genre-specific page implementation
   }
   ```

3. **Update sitemap**
   ```typescript
   // app/sitemap.ts - add your new page
   ```

### Modifying UI Theme

Update the Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        accent: '#your-accent-color',
      }
    }
  }
}
```

## 📊 Analytics & Monitoring

### Google Analytics 4
1. Create GA4 property
2. Add measurement ID to environment variables
3. Analytics automatically tracks:
   - Page views
   - Idea generation events
   - Share interactions
   - User engagement

### Performance Monitoring
- Built-in Core Web Vitals tracking
- Vercel Analytics integration ready
- Service worker performance metrics

## 🔒 Security

- **Content Security Policy**: XSS protection headers
- **HTTPS Enforced**: Secure connections only
- **No External APIs**: All data processing client-side
- **Privacy-First**: No personal data collection

## 📱 PWA Features

- **Installable**: Add to home screen on mobile/desktop
- **Offline Capable**: Service worker caching strategy
- **App-like Experience**: Standalone display mode
- **Background Sync**: Offline actions sync when reconnected

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check

# Build verification
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment platform
- **Writing Community** - For inspiration and feedback

## 📞 Support

- 📧 Email: support@bookspark.app
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/bookspark/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/bookspark/discussions)

---

<div align="center">

**[🌐 Live Demo](https://bookspark.vercel.app)** • **[📖 Documentation](https://docs.bookspark.app)** • **[🎯 Roadmap](https://github.com/yourusername/bookspark/projects)**

Made with ❤️ for the writing community

</div>