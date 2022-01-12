import React, { FC } from 'react'

import SVGMainPicture from '@/pictures/mainPicture.inline.svg'
import SVGMainPictureMobile from '@/pictures/mainPictureMobile.inline.svg'
import FooterIcon from '@/pictures/footer.inline.svg'
import MobileFooterIcon from '@/pictures/mobileFooter.inline.svg'
import { Styled } from './styles'
import { Size } from '@/ui/style/size'

const viewBox = `0 ${Size.MAIN_PAGE_OFFSET} 1440 807`

export const Background: FC = () => (
  <>
    <Styled.MainPictureContainer>
      <SVGMainPicture viewBox={viewBox} />
    </Styled.MainPictureContainer>
    <Styled.MainPictureMobileContainer>
      <SVGMainPictureMobile />
    </Styled.MainPictureMobileContainer>
    <Styled.FooterContainer>
      <FooterIcon />
    </Styled.FooterContainer>
    <Styled.FooterContainerMobile>
      <MobileFooterIcon />
    </Styled.FooterContainerMobile>
  </>
)
