import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ children, className = '', padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const classes = `bg-white rounded-lg shadow-md border border-gray-200 ${paddingClasses[padding]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}