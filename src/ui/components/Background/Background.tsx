import React, { FC } from 'react'

import SVGMainPicture from '@/pictures/mainPicture.inline.svg'
import SVGMainPictureMobile from '@/pictures/mainPictureMobile.inline.svg'
import { Styled } from './styles'

export const Background: FC = () => (
  <>
    <Styled.SVGContainer>
      <SVGMainPicture width="100%" height="100%" />
    </Styled.SVGContainer>
    <Styled.SVGContainerMobile>
      <SVGMainPictureMobile width="100%" height="100%" />
    </Styled.SVGContainerMobile>
  </>
)
