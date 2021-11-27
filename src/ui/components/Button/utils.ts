import { Color } from '@/ui/style'

import { ButtonProps } from './types'

export const getButtonStyle = (props: ButtonProps): string => {
  const { color } = props

  if (color === 'blue') {
    return `
      color: ${Color.white}
      background-color: ${Color.blue}
      `
  }

  return `
  color: ${Color.black}
  background-color: ${Color.yellow}
  `
}
