import React, { FC } from 'react'

import { Styled } from './style'
import Wheat from './wheat.inline.svg'

export const Harvest: FC = () => {
  return (
    <Styled.FirstCircle>
      <Styled.SecondCircle>
        <Styled.ThirdCircle>
          <Styled.SVGContainer>
            <Wheat width="100%" height="100%" />
          </Styled.SVGContainer>
          <Styled.TextContainer>Harvest</Styled.TextContainer>
        </Styled.ThirdCircle>
      </Styled.SecondCircle>
    </Styled.FirstCircle>
  )
}
