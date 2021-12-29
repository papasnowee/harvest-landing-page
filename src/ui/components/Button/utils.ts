import { Color } from '@/ui/style'

import { ButtonProps } from './types'

export const getButtonStyle = (props: ButtonProps & { isClicked: boolean }): string => {
  const { color } = props

  if (color === 'blue') {
    return `
      color: ${Color.white};
      background: ${Color.blue};
      border: 2px solid #6AB8E3;
      background: ${Color.blue};
      
      &:hover {
        background: ${Color.hoverBlue};
      }
      `
  }

  return `
  color: ${Color.black};
  background: ${Color.yellow};
  
  &:hover {
    background: ${Color.hoverYellow};
  }
  `
}
