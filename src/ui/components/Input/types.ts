import { InputHTMLAttributes } from 'react'

import { Theme } from '@/ui/themes'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme
  width?: string
  height?: string
}
