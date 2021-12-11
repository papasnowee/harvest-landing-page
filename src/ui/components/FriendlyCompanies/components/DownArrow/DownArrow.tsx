import React, { FC } from 'react'

import { Styled } from './styles'
import SVG from './downArrow.inline.svg'

export const DownArrow: FC = () => {
  return (
    <Styled.Container>
      <Styled.SVGContainer>
        <SVG />
      </Styled.SVGContainer>
      <Styled.OffsetSVGContainer>
        <SVG />
      </Styled.OffsetSVGContainer>
      <Styled.OffsetSVGContainer>
        <SVG />
      </Styled.OffsetSVGContainer>
    </Styled.Container>
  )
}
