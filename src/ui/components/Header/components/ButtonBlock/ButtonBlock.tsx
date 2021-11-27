import React, { FC } from 'react'

import { Styled } from './styles'

export const ButtonBlock: FC = () => {
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Link href="">Tokenomics</Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.Link href="">Statistics</Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.Link href="">Blog</Styled.Link>
      </Styled.TextContainer>
      <Styled.TextContainer>
        <Styled.DashboardContainer href="">Dashboard</Styled.DashboardContainer>
      </Styled.TextContainer>
    </Styled.Container>
  )
}
