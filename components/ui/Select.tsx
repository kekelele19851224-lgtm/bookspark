import { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: SelectOption[]
  onChange: (value: string) => void
  placeholder?: string
}

export default function Select({ 
  options, 
  onChange, 
  className = '', 
  placeholder,
  ...props 
}: SelectProps) {
  const classes = `w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-base bg-white min-h-11 touch-manipulation ${className}`
  
  return (
    <select
      className={classes}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}