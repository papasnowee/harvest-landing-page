import { Theme } from '@/ui/themes'

export interface StyledPaperProps {
  width?: string
  height?: string
  theme?: Theme
}

export type PaperProps = Omit<StyledPaperProps, 'theme'>
