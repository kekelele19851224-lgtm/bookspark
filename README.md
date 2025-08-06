# BookSpark - Ignite Your Next Story

A professional book ideas generator website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📚 Generate unique book ideas for fiction and non-fiction
- 🎨 Modern, mobile-first responsive design
- 📱 Optimized for iOS Safari
- 🔧 TypeScript for type safety
- 🎯 SEO optimized
- 💾 Local storage for saving ideas
- 📤 Social sharing functionality

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd book-ideas-generator
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
book-ideas-generator/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── generator/         # Generator page
│   ├── resources/         # Resources page
│   └── about/             # About page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── BookGenerator.tsx # Main generator component
│   ├── IdeaDisplay.tsx   # Idea display component
│   └── ...
├── data/                 # JSON data files
│   ├── fiction-templates.json
│   ├── nonfiction-templates.json
│   └── writing-tips.json
├── lib/                  # Utility functions
│   ├── generator.ts      # Idea generation logic
│   ├── storage.ts        # Local storage utilities
│   └── utils.ts          # General utilities
├── types/                # TypeScript type definitions
│   └── index.ts
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Brand Guidelines

- **Name**: BookSpark
- **Tagline**: "Ignite Your Next Story"
- **Colors**: 
  - Primary Purple: #6366f1
  - Accent Orange: #f59e0b
  - Grays: #6b7280, #374151

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.