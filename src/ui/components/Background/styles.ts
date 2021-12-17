import styled from 'styled-components'

import { Size } from '@/ui/style/size'

const MainPictureContainer = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  & svg {
    height: ${Size.MAIN_PICTURE_HEIGHT};
    width: 100%;
  }

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`
const MainPictureMobileContainer = styled.div`
  height: ${Size.MAIN_PICTURE_HEIGHT_MOBILE};
  width: 100%;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const FooterContainer = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  bottom: 0;

  & svg {
    bottom: 0;
    display: block;
    width: 100%;
  }

  @media (max-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const FooterContainerMobile = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  bottom: 0;

  & svg {
    bottom: 0;
    display: block;
    width: 100%;
  }

  @media (min-width: ${Size.MOBILE_WIDTH + 1}px) {
    display: none;
  }
`

const ContainerRealtive = styled.div`
  position: relative;
  height: 100%;
`
export const Styled = {
  FooterContainerMobile,
  ContainerRealtive,
  FooterContainer,
  MainPictureContainer,
  MainPictureMobileContainer,
}
