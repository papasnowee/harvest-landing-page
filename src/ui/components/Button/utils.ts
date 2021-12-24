import { Color } from '@/ui/style'

import { ButtonProps } from './types'

export const getButtonStyle = (props: ButtonProps & { isClicked: boolean }): string => {
  const { color, isClicked } = props

  if (color === 'blue') {
    return `
      color: ${Color.white};
      background: ${Color.blue};
      border: 2px solid #6AB8E3;
      background: ${Color.blue};
      
      &:hover {
        background: ${
          isClicked ? Color.blue : 'linear-gradient(92.11deg, #95D5F9 1.5%, #63B3DF 91.93%)'
        };
        box-shadow: 0px 20px 40px rgba(108, 185, 227, 0.38);
      }
      `
  }

  return `
  color: ${Color.black};
  background: ${Color.yellow};
  
  &:hover {
    background: ${isClicked ? Color.yellow : Color.hoverYellow};
    box-shadow: 0px 20px 40px rgba(245, 227, 40, 0.38);
  }
  `
}
