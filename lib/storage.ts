import { BookIdea } from '@/types'

/**
 * Local Storage Management System for BookSpark
 * Handles saving, retrieving, and managing book ideas in browser storage
 */
export class IdeaStorage {
  private static readonly STORAGE_KEY = 'bookSpark_favorites'
  private static readonly HISTORY_KEY = 'bookSpark_history'
  private static readonly SETTINGS_KEY = 'bookSpark_settings'
  private static readonly MAX_HISTORY_SIZE = 50
  private static readonly MAX_FAVORITES_SIZE = 100

  /**
   * Save a book idea to favorites
   */
  static saveFavorite(idea: BookIdea): void {
    try {
      const existingFavorites = this.getFavorites()
      
      // Check if idea already exists in favorites
      if (existingFavorites.some(fav => fav.id === idea.id)) {
        throw new Error('Idea already exists in favorites')
      }
      
      // Check storage limit
      if (existingFavorites.length >= this.MAX_FAVORITES_SIZE) {
        throw new Error(`Cannot save more than ${this.MAX_FAVORITES_SIZE} favorites`)
      }
      
      const updatedFavorites = [idea, ...existingFavorites]
      this.setStorageItem(this.STORAGE_KEY, updatedFavorites)
      
      // Also add to history if not already there
      this.addToHistory(idea)
      
    } catch (error) {
      console.error('Failed to save favorite idea:', error)
      throw error
    }
  }

  /**
   * Get all favorite book ideas from storage
   */
  static getFavorites(): BookIdea[] {
    try {
      const stored = this.getStorageItem(this.STORAGE_KEY)
      if (!stored) return []
      
      return this.parseStoredIdeas(stored)
    } catch (error) {
      console.error('Failed to retrieve favorite ideas:', error)
      return []
    }
  }

  /**
   * Remove a favorite book idea
   */
  static removeFavorite(id: string): void {
    try {
      const existingFavorites = this.getFavorites()
      const filteredFavorites = existingFavorites.filter(idea => idea.id !== id)
      
      if (filteredFavorites.length === existingFavorites.length) {
        throw new Error('Idea not found in favorites')
      }
      
      this.setStorageItem(this.STORAGE_KEY, filteredFavorites)
    } catch (error) {
      console.error('Failed to remove favorite idea:', error)
      throw error
    }
  }

  /**
   * Clear all favorite ideas
   */
  static clearFavorites(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY)
    } catch (error) {
      console.error('Failed to clear favorite ideas:', error)
      throw error
    }
  }

  /**
   * Check if an idea is already saved as favorite
   */
  static isIdeaSaved(ideaId: string): boolean {
    try {
      const savedIdeas = this.getFavorites()
      return savedIdeas.some(idea => idea.id === ideaId)
    } catch (error) {
      console.error('Failed to check if idea is saved:', error)
      return false
    }
  }

  /**
   * Export favorite ideas as JSON string
   */
  static exportFavorites(): string {
    try {
      const ideas = this.getFavorites()
      const exportData = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        totalIdeas: ideas.length,
        ideas: ideas
      }
      return JSON.stringify(exportData, null, 2)
    } catch (error) {
      console.error('Failed to export favorite ideas:', error)
      return JSON.stringify({ error: 'Export failed', ideas: [] })
    }
  }

  /**
   * Import ideas from JSON string
   */
  static importFavorites(jsonString: string): { success: boolean; imported: number; errors: string[] } {
    const result = { success: false, imported: 0, errors: [] as string[] }
    
    try {
      const importData = JSON.parse(jsonString)
      
      // Validate import data structure
      if (!importData.ideas || !Array.isArray(importData.ideas)) {
        result.errors.push('Invalid import format: missing or invalid ideas array')
        return result
      }
      
      const existingFavorites = this.getFavorites()
      const existingIds = new Set(existingFavorites.map(idea => idea.id))
      const validIdeas: BookIdea[] = []
      
      // Validate and filter each idea
      importData.ideas.forEach((idea: any, index: number) => {
        try {
          const validatedIdea = this.validateImportedIdea(idea)
          
          // Skip if already exists
          if (existingIds.has(validatedIdea.id)) {
            result.errors.push(`Idea ${index + 1}: Already exists in favorites`)
            return
          }
          
          // Check total limit
          if (existingFavorites.length + validIdeas.length >= this.MAX_FAVORITES_SIZE) {
            result.errors.push(`Reached maximum favorites limit (${this.MAX_FAVORITES_SIZE})`)
            return
          }
          
          validIdeas.push(validatedIdea)
          result.imported++
          
        } catch (error) {
          result.errors.push(`Idea ${index + 1}: ${error instanceof Error ? error.message : 'Invalid format'}`)
        }
      })
      
      // Save valid ideas
      if (validIdeas.length > 0) {
        const allFavorites = [...validIdeas, ...existingFavorites]
        this.setStorageItem(this.STORAGE_KEY, allFavorites)
        result.success = true
      }
      
    } catch (error) {
      result.errors.push(`Parse error: ${error instanceof Error ? error.message : 'Invalid JSON'}`)
    }
    
    return result
  }

  /**
   * Add idea to generation history
   */
  static addToHistory(idea: BookIdea): void {
    try {
      const history = this.getHistory()
      
      // Remove if already exists to move to front
      const filteredHistory = history.filter(h => h.id !== idea.id)
      const updatedHistory = [idea, ...filteredHistory]
      
      // Limit history size
      if (updatedHistory.length > this.MAX_HISTORY_SIZE) {
        updatedHistory.splice(this.MAX_HISTORY_SIZE)
      }
      
      this.setStorageItem(this.HISTORY_KEY, updatedHistory)
    } catch (error) {
      console.error('Failed to add idea to history:', error)
    }
  }

  /**
   * Get generation history
   */
  static getHistory(): BookIdea[] {
    try {
      const stored = this.getStorageItem(this.HISTORY_KEY)
      if (!stored) return []
      
      return this.parseStoredIdeas(stored)
    } catch (error) {
      console.error('Failed to retrieve history:', error)
      return []
    }
  }

  /**
   * Clear generation history
   */
  static clearHistory(): void {
    try {
      localStorage.removeItem(this.HISTORY_KEY)
    } catch (error) {
      console.error('Failed to clear history:', error)
      throw error
    }
  }

  /**
   * Get user settings
   */
  static getSettings(): Record<string, any> {
    try {
      const stored = this.getStorageItem(this.SETTINGS_KEY)
      if (!stored) return {}
      
      return JSON.parse(stored)
    } catch (error) {
      console.error('Failed to retrieve settings:', error)
      return {}
    }
  }

  /**
   * Save user settings
   */
  static saveSettings(settings: Record<string, any>): void {
    try {
      this.setStorageItem(this.SETTINGS_KEY, settings)
    } catch (error) {
      console.error('Failed to save settings:', error)
      throw error
    }
  }

  /**
   * Get storage usage statistics
   */
  static getStorageStats(): {
    favorites: number
    history: number
    maxFavorites: number
    maxHistory: number
    storageUsed: number
    storageAvailable: boolean
  } {
    const favorites = this.getFavorites()
    const history = this.getHistory()
    
    // Estimate storage usage
    let storageUsed = 0
    try {
      const favoritesSize = JSON.stringify(favorites).length
      const historySize = JSON.stringify(history).length
      const settingsSize = JSON.stringify(this.getSettings()).length
      storageUsed = favoritesSize + historySize + settingsSize
    } catch (error) {
      console.error('Failed to calculate storage usage:', error)
    }
    
    return {
      favorites: favorites.length,
      history: history.length,
      maxFavorites: this.MAX_FAVORITES_SIZE,
      maxHistory: this.MAX_HISTORY_SIZE,
      storageUsed,
      storageAvailable: this.isLocalStorageAvailable()
    }
  }

  /**
   * Search through saved ideas
   */
  static searchIdeas(query: string, includeHistory: boolean = false): BookIdea[] {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0)
    if (searchTerms.length === 0) return []
    
    const favorites = this.getFavorites()
    const ideas = includeHistory ? [...favorites, ...this.getHistory()] : favorites
    
    // Remove duplicates if including history
    const uniqueIdeas = includeHistory 
      ? ideas.filter((idea, index, arr) => arr.findIndex(i => i.id === idea.id) === index)
      : ideas
    
    return uniqueIdeas.filter(idea => {
      const searchableText = [
        ...idea.title,
        idea.genre,
        idea.concept,
        idea.mainCharacter,
        idea.setting,
        idea.conflict,
        ...idea.themes
      ].join(' ').toLowerCase()
      
      return searchTerms.some(term => searchableText.includes(term))
    })
  }

  /**
   * Get ideas by genre
   */
  static getIdeasByGenre(genre: string): BookIdea[] {
    const favorites = this.getFavorites()
    return favorites.filter(idea => idea.genre.toLowerCase() === genre.toLowerCase())
  }

  /**
   * Get ideas by target audience
   */
  static getIdeasByAudience(audience: string): BookIdea[] {
    const favorites = this.getFavorites()
    return favorites.filter(idea => idea.targetAudience.toLowerCase() === audience.toLowerCase())
  }

  /**
   * Backup all data
   */
  static createBackup(): string {
    const backupData = {
      timestamp: new Date().toISOString(),
      version: '1.0',
      favorites: this.getFavorites(),
      history: this.getHistory(),
      settings: this.getSettings()
    }
    
    return JSON.stringify(backupData, null, 2)
  }

  /**
   * Restore from backup
   */
  static restoreFromBackup(backupString: string): { success: boolean; errors: string[] } {
    const result = { success: false, errors: [] as string[] }
    
    try {
      const backupData = JSON.parse(backupString)
      
      // Validate backup structure
      if (!backupData.favorites || !Array.isArray(backupData.favorites)) {
        result.errors.push('Invalid backup: missing favorites data')
        return result
      }
      
      // Restore favorites
      if (backupData.favorites.length > 0) {
        this.setStorageItem(this.STORAGE_KEY, backupData.favorites)
      }
      
      // Restore history
      if (backupData.history && Array.isArray(backupData.history)) {
        this.setStorageItem(this.HISTORY_KEY, backupData.history)
      }
      
      // Restore settings
      if (backupData.settings && typeof backupData.settings === 'object') {
        this.setStorageItem(this.SETTINGS_KEY, backupData.settings)
      }
      
      result.success = true
      
    } catch (error) {
      result.errors.push(`Restore failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
    
    return result
  }

  // Private helper methods

  private static getStorageItem(key: string): string | null {
    if (!this.isLocalStorageAvailable()) {
      throw new Error('Local storage is not available')
    }
    return localStorage.getItem(key)
  }

  private static setStorageItem(key: string, value: any): void {
    if (!this.isLocalStorageAvailable()) {
      throw new Error('Local storage is not available')
    }
    localStorage.setItem(key, JSON.stringify(value))
  }

  private static parseStoredIdeas(stored: string): BookIdea[] {
    const ideas = JSON.parse(stored)
    return Array.isArray(ideas) ? ideas.map(idea => ({
      ...idea,
      generatedAt: new Date(idea.generatedAt)
    })) : []
  }

  private static validateImportedIdea(idea: any): BookIdea {
    const requiredFields = ['id', 'title', 'genre', 'concept', 'mainCharacter', 'setting', 'conflict', 'targetAudience', 'openingLine', 'themes']
    
    for (const field of requiredFields) {
      if (!(field in idea)) {
        throw new Error(`Missing required field: ${field}`)
      }
    }
    
    if (!Array.isArray(idea.title) || idea.title.length === 0) {
      throw new Error('Title must be a non-empty array')
    }
    
    if (!Array.isArray(idea.themes)) {
      throw new Error('Themes must be an array')
    }
    
    return {
      ...idea,
      generatedAt: idea.generatedAt ? new Date(idea.generatedAt) : new Date()
    }
  }

  private static isLocalStorageAvailable(): boolean {
    try {
      const test = '__localStorage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (error) {
      return false
    }
  }
}

// Export individual functions for backward compatibility
export const {
  saveFavorite,
  getFavorites,
  removeFavorite,
  clearFavorites,
  isIdeaSaved,
  exportFavorites,
  importFavorites,
  addToHistory,
  getHistory,
  clearHistory,
  getSettings,
  saveSettings,
  getStorageStats,
  searchIdeas,
  getIdeasByGenre,
  getIdeasByAudience,
  createBackup,
  restoreFromBackup
} = IdeaStorage

// Legacy function names for existing code compatibility
export function saveIdea(idea: BookIdea): void {
  return IdeaStorage.saveFavorite(idea)
}

export function getSavedIdeas(): BookIdea[] {
  return IdeaStorage.getFavorites()
}

export function deleteIdea(ideaId: string): void {
  return IdeaStorage.removeFavorite(ideaId)
}

export function clearAllIdeas(): void {
  return IdeaStorage.clearFavorites()
}

export function exportIdeas(): string {
  return IdeaStorage.exportFavorites()
}

export function importIdeas(jsonString: string): boolean {
  const result = IdeaStorage.importFavorites(jsonString)
  return result.success
}