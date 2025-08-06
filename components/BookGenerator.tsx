'use client'

import { useState } from 'react'
import { GeneratorOptions, BookIdea } from '@/types'
import IdeaDisplay from './IdeaDisplay'
import Button from './ui/Button'
import Select from './ui/Select'
import { generateBookIdea, getGenresForBookType } from '@/lib/generator'

export default function BookGenerator() {
  const [options, setOptions] = useState<GeneratorOptions>({
    bookType: 'fiction',
    genre: '',
    length: 'novel',
    targetAge: 'adult',
    tone: 'serious'
  })
  
  const [generatedIdea, setGeneratedIdea] = useState<BookIdea | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // Get genres dynamically from generator
  const availableGenres = getGenresForBookType(options.bookType)

  const handleGenerate = async () => {
    if (!options.genre) return
    
    setIsGenerating(true)
    
    try {
      // Use the real generator
      const idea = await generateBookIdea(options)
      setGeneratedIdea(idea)
    } catch (error) {
      console.error('Failed to generate book idea:', error)
      // Fallback to a simple error message
      setGeneratedIdea({
        id: Date.now().toString(),
        title: ['Error Generating Idea'],
        genre: options.genre,
        concept: 'Sorry, there was an error generating your book idea. Please try again.',
        mainCharacter: 'N/A',
        setting: 'N/A',
        conflict: 'N/A',
        targetAudience: options.targetAge,
        openingLine: 'Please try generating another idea.',
        themes: ['Error'],
        generatedAt: new Date()
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleNewIdea = () => {
    setGeneratedIdea(null)
  }

  return (
    <div className="space-y-8">
      {/* Generator Form */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Customize Your Book Idea
          </h2>
          <p className="text-white/90">
            Select your preferences and generate unlimited creative concepts
          </p>
        </div>
        
        <div className="p-6 sm:p-8 space-y-8">
          {/* Book Type Selection - Radio Cards */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Book Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: 'fiction', label: 'Fiction', icon: '📚', desc: 'Stories, novels, fantasy, mystery' },
                { value: 'non-fiction', label: 'Non-Fiction', icon: '📖', desc: 'Self-help, business, biography' }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setOptions({...options, bookType: type.value as 'fiction' | 'non-fiction', genre: ''})}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-105 min-h-20 ${
                    options.bookType === type.value
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{type.icon}</span>
                    <div>
                      <div className={`font-semibold text-lg ${
                        options.bookType === type.value ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {type.label}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {type.desc}
                      </div>
                    </div>
                    <div className={`ml-auto w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                      options.bookType === type.value
                        ? 'border-primary bg-primary'
                        : 'border-gray-300 group-hover:border-primary/50'
                    }`}>
                      {options.bookType === type.value && (
                        <div className="w-full h-full rounded-full bg-white scale-50" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Genre Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Genre
            </label>
            <Select
              value={options.genre}
              onChange={(value) => setOptions({...options, genre: value})}
              options={[
                { value: '', label: 'Select a genre...' },
                ...availableGenres.map(genre => ({ value: genre, label: genre }))
              ]}
              className="text-lg py-4 px-6 min-h-14"
            />
          </div>

          {/* Form Grid for Other Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Book Length */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Book Length
              </label>
              <Select
                value={options.length}
                onChange={(value) => setOptions({...options, length: value as any})}
                options={[
                  { value: 'short-story', label: 'Short Story' },
                  { value: 'novella', label: 'Novella' },
                  { value: 'novel', label: 'Novel' }
                ]}
                className="text-base py-4 px-4 min-h-12"
              />
            </div>
            
            {/* Target Audience */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Target Audience
              </label>
              <Select
                value={options.targetAge}
                onChange={(value) => setOptions({...options, targetAge: value as any})}
                options={[
                  { value: 'children', label: 'Children' },
                  { value: 'young-adult', label: 'Young Adult' },
                  { value: 'adult', label: 'Adult' }
                ]}
                className="text-base py-4 px-4 min-h-12"
              />
            </div>
            
            {/* Tone */}
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Tone
              </label>
              <Select
                value={options.tone}
                onChange={(value) => setOptions({...options, tone: value as any})}
                options={[
                  { value: 'light', label: 'Light & Uplifting' },
                  { value: 'serious', label: 'Serious & Thoughtful' },
                  { value: 'humorous', label: 'Humorous & Fun' },
                  { value: 'dark', label: 'Dark & Intense' }
                ]}
                className="text-base py-4 px-4 min-h-12"
              />
            </div>
          </div>
          
          {/* Generate Button */}
          <div className="pt-4">
            {!generatedIdea ? (
              <Button
                onClick={handleGenerate}
                disabled={!options.genre || isGenerating}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-6 px-8 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-16"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Generating Your Idea...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Generate Book Idea</span>
                  </div>
                )}
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGenerate}
                  disabled={!options.genre || isGenerating}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 px-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-14"
                >
                  Generate New Idea
                </Button>
                <Button
                  onClick={handleNewIdea}
                  variant="outline"
                  className="flex-1 sm:flex-none px-6 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary transition-all duration-300 min-h-14"
                >
                  Start Over
                </Button>
              </div>
            )}
          </div>

          {/* Helper Text */}
          {!options.genre && (
            <div className="text-center py-4">
              <p className="text-gray-500 text-lg">
                👆 Select a genre to get started
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Results Display */}
      {generatedIdea && (
        <IdeaDisplay idea={generatedIdea} onGenerateNew={handleGenerate} />
      )}
    </div>
  )
}