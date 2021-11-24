import { Theme } from '@/ui/themes'

export type SelectProps = {
  theme?: Theme
  defaultValue?: string
  options: string[]
  onChange?(a: string): void
  itemsDisplayed?: number
}

export type CurrentValueType = { theme?: Theme; isActive: boolean }

export type DropdownType = {
  theme?: Theme
  isActive: boolean
  itemHeight: number
  itemsLength: number
  scrolled: number
  itemsDisplayed: number
}

export type ChevronType = {
  isActive: boolean
}
