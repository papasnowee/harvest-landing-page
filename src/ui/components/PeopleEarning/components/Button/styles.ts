import styled from 'styled-components'

import { Color } from '@/ui/style'
import { Size } from '@/ui/style/size'

const Container = styled.div<{ isActive: boolean }>`
  ${(props) => {
    const { isActive } = props
    return `
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-radius: 8px;

        background: ${
          isActive
            ? Color.blue
            : 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 91.82%)'
        };

      box-shadow: ${isActive ? '4px 16px 40px rgba(39, 68, 95, 0.08)' : ''};
      filter: ${isActive ? '' : 'drop-shadow(4px 16px 40px rgba(39, 68, 95, 0.08))'};

      &:hover {
        background: ${isActive ? 'linear-gradient(44.08deg, #95D5F9 -8.27%, #63B3DF 121.42%)' : ''};
        box-shadow: ${isActive ? '0px 20px 40px rgba(108, 185, 227, 0.38)' : ''};
      };

      @media (max-width: ${Size.MOBILE_WIDTH}px) {
          width: 42px;
          height: 42px;
      }
`
  }}
`

const RightIconContainer = styled.div`
  width: 28px;
  height: 28px;

  svg {
    width: 29px;
    height: 28px;
    display: block;
  }

  @media (max-width: ${Size.MOBILE_WIDTH}px) {
    width: 18px;
    height: 18px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`

const LeftIconContainer = styled(RightIconContainer)`
  transform: rotate(180deg);
`
export const Styled = {
  RightIconContainer,
  LeftIconContainer,
  Container,
}
