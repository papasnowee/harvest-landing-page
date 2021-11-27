import React, { FC } from 'react'

import { Styled } from './styles'

export const FirstScreenBody: FC = () => {
  return (
    <Styled.Container>
      <Styled.LeftBlock>
        <Styled.MainTextContainer>
          Earn Money on Your
          <br />
          $ETH While You Sleep
        </Styled.MainTextContainer>
        <Styled.CaptionContainer>Put your idle assets to work 24/7/365</Styled.CaptionContainer>
      </Styled.LeftBlock>
    </Styled.Container>
  )
}
