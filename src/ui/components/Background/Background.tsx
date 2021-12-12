import React, { FC } from 'react'

import SVGMainPicture from '@/pictures/mainPicture.inline.svg'
import SVGMainPictureMobile from '@/pictures/mainPictureMobile.inline.svg'
import { Styled } from './styles'
import { Size } from '@/ui/style/size'

const viewBox = `0 ${Size.MAIN_PAGE_OFFSET} 1900 805.5`

export const Background: FC = () => (
  <>
    <Styled.SVGContainer>
      <SVGMainPicture viewBox={viewBox} />
    </Styled.SVGContainer>
    <Styled.SVGContainerMobile>
      <SVGMainPictureMobile />
    </Styled.SVGContainerMobile>
  </>
)
