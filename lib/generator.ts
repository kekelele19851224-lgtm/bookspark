import { BookIdea, GeneratorOptions } from '@/types'
import { getRandomElement, getRandomElements, generateId } from './utils'
import fictionTemplates from '@/data/fiction-templates.json'
import nonfictionTemplates from '@/data/nonfiction-templates.json'

// Template variables for fiction title generation
const FICTION_VARIABLES = {
  season: ['Spring', 'Summer', 'Autumn', 'Winter', 'Harvest', 'Solstice'],
  adjective: ['Hidden', 'Forbidden', 'Lost', 'Ancient', 'Secret', 'Mysterious', 'Eternal', 'Broken', 'Perfect', 'Silent'],
  location: ['Mountains', 'Ocean', 'Forest', 'Desert', 'Valley', 'Island', 'City', 'Border', 'River', 'Lake'],
  place: ['Haven', 'Crossing', 'Harbor', 'Ridge', 'Falls', 'Gardens', 'Manor', 'Chapel', 'Bridge', 'Square'],
  profession: ['Doctor', 'Teacher', 'Artist', 'Chef', 'Lawyer', 'Detective', 'Musician', 'Writer', 'Scientist', 'Engineer'],
  color: ['Crimson', 'Golden', 'Silver', 'Midnight', 'Emerald', 'Sapphire', 'Rose', 'Ivory', 'Copper', 'Pearl'],
  object: ['Key', 'Book', 'Letter', 'Ring', 'Map', 'Diary', 'Crown', 'Mirror', 'Sword', 'Stone'],
  emotion: ['Hope', 'Love', 'Fear', 'Joy', 'Sorrow', 'Peace', 'Rage', 'Wonder', 'Dreams', 'Memories'],
  weather: ['Stars', 'Moonlight', 'Storm', 'Snow', 'Rain', 'Sunset', 'Dawn', 'Mist', 'Lightning', 'Wind'],
  magic: ['Enchantment', 'Magic', 'Wonder', 'Mystery', 'Power', 'Destiny', 'Fate', 'Dreams', 'Spells', 'Wishes'],
  barrier: ['Veil', 'Wall', 'Gate', 'Mountain', 'Sea', 'Desert', 'Forest', 'River', 'Storm', 'Mist'],
  reward: ['Victory', 'Journey', 'Promise', 'Dream', 'Adventure', 'Discovery', 'Triumph', 'Destiny', 'Freedom', 'Truth'],
  
  // Fantasy-specific variables
  magical_object: ['Crystal', 'Staff', 'Amulet', 'Orb', 'Tome', 'Blade', 'Shield', 'Cloak', 'Crown', 'Ring'],
  realm: ['Shadows', 'Light', 'Fire', 'Ice', 'Stone', 'Sky', 'Earth', 'Stars', 'Dreams', 'Time'],
  element: ['Fire', 'Water', 'Earth', 'Air', 'Shadow', 'Light', 'Lightning', 'Ice', 'Stone', 'Star'],
  creature: ['Dragon', 'Phoenix', 'Unicorn', 'Griffin', 'Wolf', 'Raven', 'Eagle', 'Lion', 'Serpent', 'Spider'],
  ancient_name: ['Avalon', 'Eldoria', 'Zephyria', 'Mystral', 'Valorian', 'Celestine', 'Arcanum', 'Luminara', 'Nethys', 'Pyrion'],
  
  // Mystery-specific variables
  time: ['Midnight', 'Dawn', 'Noon', 'Dusk', 'Evening', 'Morning', 'Night', 'Hour', 'Moment', 'Second'],
  street: ['Baker Street', 'Main Street', 'Elm Avenue', 'Oak Lane', 'Pine Road', 'Maple Drive', 'Hill Street', 'Park Avenue'],
  
  // Sci-fi specific variables
  planet: ['Mars', 'Europa', 'Titan', 'Kepler', 'Proxima', 'Gliese', 'Tau Ceti', 'Wolf', 'Vega', 'Altair'],
  technology: ['Quantum', 'Neural', 'Cyber', 'Bio', 'Nano', 'Plasma', 'Fusion', 'Gravitational', 'Temporal', 'Digital'],
  number: ['Seven', 'Three', 'Five', 'Nine', 'Twelve', 'Thirteen', 'Twenty-One', 'Hundred', 'Thousand', 'Million'],
  destination: ['Alpha Centauri', 'Andromeda', 'The Void', 'New Earth', 'Station Prime', 'The Nexus', 'Deep Space', 'The Frontier'],
  space_location: ['Andromeda', 'Orion', 'The Void', 'Deep Space', 'Alpha Centauri', 'The Nebula', 'Beta Quadrant', 'Sector 7'],
  
  // Thriller specific variables  
  threat: ['Shadows', 'Darkness', 'Death', 'Danger', 'Terror', 'Fear', 'Evil', 'Chaos', 'Destruction', 'Betrayal'],
  name: ['Alpha', 'Omega', 'Zero', 'Prime', 'Delta', 'Sigma', 'Phoenix', 'Viper', 'Eagle', 'Wolf']
}

// Template variables for non-fiction title generation
const NONFICTION_VARIABLES = {
  adjective: ['Ultimate', 'Complete', 'Essential', 'Practical', 'Modern', 'Simple', 'Advanced', 'Revolutionary', 'Proven', 'Effective'],
  skill: ['Leadership', 'Communication', 'Productivity', 'Creativity', 'Success', 'Confidence', 'Focus', 'Resilience', 'Growth', 'Excellence'],
  activity: ['Living', 'Learning', 'Growing', 'Succeeding', 'Creating', 'Building', 'Achieving', 'Transforming', 'Mastering', 'Thriving'],
  area: ['Life', 'Career', 'Relationships', 'Health', 'Finances', 'Mindset', 'Habits', 'Goals', 'Future', 'Potential'],
  number: ['7', '10', '21', '30', '5', '12', '3', '100', '365', '52'],
  concept: ['Success', 'Happiness', 'Productivity', 'Leadership', 'Growth', 'Change', 'Excellence', 'Achievement', 'Innovation', 'Transformation'],
  limitation: ['Fear', 'Doubt', 'Procrastination', 'Stress', 'Anxiety', 'Negativity', 'Perfectionism', 'Overwhelm', 'Burnout', 'Stagnation'],
  quality: ['Positive', 'Healthy', 'Productive', 'Successful', 'Confident', 'Resilient', 'Creative', 'Focused', 'Balanced', 'Mindful'],
  potential: ['Inner Strength', 'Hidden Talents', 'Full Potential', 'True Power', 'Best Self', 'Creative Genius', 'Leadership Abilities', 'Natural Gifts'],
  achievement: ['Success', 'Excellence', 'Mastery', 'Growth', 'Transformation', 'Achievement', 'Fulfillment', 'Purpose', 'Meaning', 'Impact'],
  industry: ['Technology', 'Healthcare', 'Education', 'Finance', 'Marketing', 'Retail', 'Manufacturing', 'Consulting', 'Entertainment', 'Agriculture'],
  business_area: ['Leadership', 'Innovation', 'Strategy', 'Marketing', 'Sales', 'Operations', 'Finance', 'Technology', 'Culture', 'Growth'],
  business_type: ['Startups', 'Small Business', 'Enterprises', 'Teams', 'Organizations', 'Companies', 'Ventures', 'Partnerships', 'Franchises'],
  business_skill: ['Negotiation', 'Leadership', 'Innovation', 'Strategy', 'Communication', 'Decision Making', 'Problem Solving', 'Team Building'],
  success_area: ['Business', 'Leadership', 'Innovation', 'Growth', 'Success', 'Excellence', 'Performance', 'Results', 'Achievement', 'Impact']
}

/**
 * Generate a book idea based on user preferences
 */
export async function generateBookIdea(options: GeneratorOptions): Promise<BookIdea> {
  // Simulate API delay for better UX
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  if (options.bookType === 'fiction') {
    return generateFictionIdea(options)
  } else {
    return generateNonfictionIdea(options)
  }
}

/**
 * Generate a fiction book idea
 */
function generateFictionIdea(options: GeneratorOptions): BookIdea {
  const genreKey = options.genre.toLowerCase().replace(/[\s-]/g, '_')
  const template = (fictionTemplates as any)[genreKey] || (fictionTemplates as any).romance
  
  const concept = selectRandom(template.concepts) as string
  const character = selectRandom(template.characters) as string
  const setting = selectRandom(template.settings) as string
  const conflict = selectRandom(template.conflicts) as string
  const themes = selectMultiple(template.themes, getRandomNumber(2, 4)) as string[]
  const openingLine = selectRandom(template.openingLines) as string
  
  // Generate title variations using patterns
  const titles = generateTitles(template.titlePatterns, 3)
  
  // Combine concept with character and setting for richer description
  const enrichedConcept = `${concept} The story follows ${character} in ${setting}, where ${conflict.toLowerCase()}.`
  
  return {
    id: generateId(),
    title: titles,
    genre: options.genre,
    concept: enrichedConcept,
    mainCharacter: character,
    setting: setting,
    conflict: conflict,
    targetAudience: options.targetAge,
    openingLine: openingLine,
    themes: themes,
    generatedAt: new Date()
  }
}

/**
 * Generate a non-fiction book idea
 */
function generateNonfictionIdea(options: GeneratorOptions): BookIdea {
  const genreKey = options.genre.toLowerCase().replace(/[&\s-]/g, '_')
  const template = (nonfictionTemplates as any)[genreKey] || (nonfictionTemplates as any)['self_help']
  
  const topic = selectRandom(template.topics) as string
  const approach = selectRandom(template.approaches) as string
  const targetAudience = selectRandom(template.target_audiences) as string
  const format = selectRandom(template.formats) as string
  
  // Generate title variations for non-fiction
  const titles = generateTitles(template.titlePatterns, 3)
  
  const themes = [
    'Personal transformation',
    'Evidence-based strategies', 
    'Practical implementation',
    'Sustainable change',
    'Expert insights',
    'Real-world application'
  ]
  
  const concept = `${topic}. ${approach} This book uses ${format.toLowerCase()} to help readers achieve lasting change.`
  
  return {
    id: generateId(),
    title: titles,
    genre: options.genre,
    concept,
    mainCharacter: `Target reader: ${targetAudience}`,
    setting: `Format: ${format}`,
    conflict: `Main challenge: Implementing lasting change while overcoming common obstacles and maintaining motivation`,
    targetAudience: options.targetAge,
    openingLine: generateNonfictionOpeningLine(topic),
    themes: selectMultiple(themes, 3),
    generatedAt: new Date()
  }
}

/**
 * Generate titles from title patterns by replacing variables
 */
function generateTitles(patterns: string[], count: number): string[] {
  const titles: string[] = []
  const usedPatterns = new Set<string>()
  
  while (titles.length < count && usedPatterns.size < patterns.length) {
    const pattern = selectRandom(patterns)
    if (usedPatterns.has(pattern)) continue
    
    usedPatterns.add(pattern)
    const title = fillTitlePattern(pattern)
    titles.push(title)
  }
  
  // If we need more titles and have used all patterns, generate variations
  while (titles.length < count) {
    const pattern = selectRandom(patterns)
    const title = fillTitlePattern(pattern)
    if (!titles.includes(title)) {
      titles.push(title)
    }
  }
  
  return titles
}

/**
 * Fill title pattern with appropriate variables
 */
function fillTitlePattern(pattern: string): string {
  let title = pattern
  
  // Replace variables in the pattern
  Object.entries({...FICTION_VARIABLES, ...NONFICTION_VARIABLES}).forEach(([key, values]) => {
    const regex = new RegExp(`\\{${key}\\}`, 'g')
    if (title.match(regex)) {
      title = title.replace(regex, selectRandom(values))
    }
  })
  
  return title
}

/**
 * Generate opening line for non-fiction books
 */
function generateNonfictionOpeningLine(topic: string): string {
  const openingTemplates = [
    `What if I told you that ${topic.toLowerCase()} is not only possible, but inevitable with the right approach?`,
    `The journey to ${topic.toLowerCase()} begins with a single realization: you have more power than you think.`,
    `After studying thousands of people who successfully mastered ${topic.toLowerCase()}, I discovered a pattern.`,
    `Everything you think you know about ${topic.toLowerCase()} is about to change.`,
    `The secret to ${topic.toLowerCase()} isn't what most people think—it's actually much simpler.`,
    `Imagine if ${topic.toLowerCase()} became as natural as breathing. This book will show you how.`,
    `The difference between those who achieve ${topic.toLowerCase()} and those who struggle isn't talent—it's strategy.`,
    `What if the biggest obstacle to ${topic.toLowerCase()} isn't external, but the stories we tell ourselves?`,
    `The path to ${topic.toLowerCase()} has been mapped by science, tested by experience, and proven by results.`,
    `Your relationship with ${topic.toLowerCase()} is about to transform in ways you never imagined possible.`
  ]
  
  return selectRandom(openingTemplates)
}

/**
 * Select a random element from an array
 */
function selectRandom<T>(array: T[]): T {
  if (array.length === 0) throw new Error('Cannot select from empty array')
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Select multiple random elements from an array (without duplicates)
 */
function selectMultiple<T>(array: T[], count: number): T[] {
  if (count >= array.length) return [...array]
  
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

/**
 * Generate a random number between min and max (inclusive)
 */
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Get template data for a specific genre and book type
 */
function getTemplate(genre: string, bookType: 'fiction' | 'non-fiction'): any {
  const genreKey = genre.toLowerCase().replace(/[\s-]/g, '_')
  
  if (bookType === 'fiction') {
    return (fictionTemplates as any)[genreKey] || (fictionTemplates as any).romance
  } else {
    return (nonfictionTemplates as any)[genreKey] || (nonfictionTemplates as any).self_help
  }
}

/**
 * Combine concept elements for richer descriptions
 */
function combineConcept(concepts: string[], options: GeneratorOptions): string {
  const baseConcept = selectRandom(concepts)
  
  // Add tone-based modifiers
  const toneModifiers = {
    light: ['uplifting', 'heartwarming', 'optimistic', 'cheerful'],
    serious: ['thought-provoking', 'profound', 'meaningful', 'intense'],
    humorous: ['witty', 'amusing', 'lighthearted', 'entertaining'],
    dark: ['haunting', 'gritty', 'complex', 'psychological']
  }
  
  const modifier = selectRandom(toneModifiers[options.tone] || toneModifiers.serious)
  
  // Add length-based elements
  const lengthElements = {
    'short-story': 'This compelling short story explores',
    'novella': 'This engaging novella delves into',
    'novel': 'This sweeping novel examines'
  }
  
  const lengthElement = lengthElements[options.length] || lengthElements.novel
  
  return `${lengthElement} ${baseConcept.toLowerCase()} in a ${modifier} narrative.`
}

/**
 * Get available genres for a book type
 */
export function getGenresForBookType(bookType: 'fiction' | 'non-fiction'): string[] {
  if (bookType === 'fiction') {
    return [
      'Romance',
      'Mystery', 
      'Fantasy',
      'Science Fiction',
      'Thriller',
      'Horror'
    ]
  } else {
    return [
      'Self-Help',
      'Business'
    ]
  }
}

/**
 * Validate generator options
 */
export function validateGeneratorOptions(options: GeneratorOptions): boolean {
  const availableGenres = getGenresForBookType(options.bookType)
  return availableGenres.includes(options.genre)
}

/**
 * Get recommended themes for a genre
 */
export function getRecommendedThemes(genre: string, bookType: 'fiction' | 'non-fiction'): string[] {
  const template = getTemplate(genre, bookType)
  return template.themes || []
}

/**
 * Generate multiple book ideas at once
 */
export async function generateMultipleIdeas(options: GeneratorOptions, count: number = 3): Promise<BookIdea[]> {
  const ideas: BookIdea[] = []
  
  for (let i = 0; i < count; i++) {
    const idea = await generateBookIdea(options)
    ideas.push(idea)
  }
  
  return ideas
}