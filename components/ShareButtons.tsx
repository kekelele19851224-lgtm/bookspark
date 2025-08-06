'use client'

import { BookIdea } from '@/types'
import { useState } from 'react'
import { analytics } from './Analytics'

interface ShareButtonsProps {
  idea: BookIdea
}

export default function ShareButtons({ idea }: ShareButtonsProps) {
  const [isSharing, setIsSharing] = useState(false)
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/shared/${idea.id}`
  const shareText = `Check out this amazing book idea from BookSpark: "${idea.title[0]}" - ${idea.concept.substring(0, 100)}...`

  const handleNativeShare = async () => {
    if (!navigator.share) {
      // Fallback to copy URL
      await copyToClipboard()
      return
    }

    try {
      setIsSharing(true)
      
      const shareData = {
        title: `BookSpark: ${idea.title[0]}`,
        text: shareText,
        url: shareUrl
      }

      await navigator.share(shareData)
      
      // Track share event
      analytics.trackIdeaShare('native', idea.genre)
      console.log('Content shared successfully')
    } catch (error) {
      console.error('Error sharing:', error)
      // Fallback to copy
      await copyToClipboard()
    } finally {
      setIsSharing(false)
    }
  }

  const shareOnTwitter = () => {
    const text = `${shareText}\n\n#BookSpark #WritingPrompts #BookIdeas #${idea.genre.replace(/\s+/g, '')}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`
    
    window.open(url, '_blank', 'width=550,height=420,scrollbars=yes,resizable=yes')
    analytics.trackIdeaShare('twitter', idea.genre)
  }

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
    
    window.open(url, '_blank', 'width=550,height=420,scrollbars=yes,resizable=yes')
    analytics.trackIdeaShare('facebook', idea.genre)
  }

  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Book Idea: ${idea.title[0]}`)
    const body = encodeURIComponent(`Hi!\n\nI found this amazing book idea on BookSpark and thought you'd be interested:\n\n"${idea.title[0]}"\n\n${idea.concept}\n\nGenre: ${idea.genre}\nTarget Audience: ${idea.targetAudience}\n\nCheck out more ideas at: ${shareUrl}\n\nHappy writing!\n\nGenerated with BookSpark - Ignite Your Next Story`)
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    analytics.trackIdeaShare('email', idea.genre)
  }

  const copyToClipboard = async () => {
    try {
      const textToCopy = `${shareText}\n\nGenerated with BookSpark: ${shareUrl}`
      
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = textToCopy
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        textArea.remove()
      }
      
      setShowCopySuccess(true)
      setTimeout(() => setShowCopySuccess(false), 2000)
      analytics.trackIdeaShare('copy', idea.genre)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="relative">
      {/* Primary Share Button */}
      <div className="flex flex-wrap gap-2">
        {/* Native Share (Mobile) */}
        {typeof navigator !== 'undefined' && navigator.share && (
          <button
            onClick={handleNativeShare}
            disabled={isSharing}
            className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 min-h-11 sm:hidden"
            aria-label="Share idea"
          >
            {isSharing ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            )}
            <span>Share</span>
          </button>
        )}

        {/* Desktop Share Options */}
        <div className="hidden sm:flex flex-wrap gap-2">
          <button
            onClick={shareOnTwitter}
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors rounded-lg hover:bg-gray-100 min-h-11 min-w-11"
            title="Share on Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          
          <button
            onClick={shareOnFacebook}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100 min-h-11 min-w-11"
            title="Share on Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          <button
            onClick={shareViaEmail}
            className="p-2 text-gray-600 hover:text-green-600 transition-colors rounded-lg hover:bg-gray-100 min-h-11 min-w-11"
            title="Share via email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100 min-h-11 min-w-11"
          title="Copy to clipboard"
        >
          {showCopySuccess ? (
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Copy Success Notification */}
      {showCopySuccess && (
        <div className="absolute top-full left-0 mt-2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg z-10">
          ✅ Copied to clipboard!
        </div>
      )}
    </div>
  )
}