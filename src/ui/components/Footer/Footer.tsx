import React, { FC } from 'react'

import { Styled } from './styles'

export const Footer: FC = () => {
  return (
    <Styled.Container>
      <Styled.Text>2021, Harvest.</Styled.Text>
      <Styled.LinkBlock>
        <Styled.Link>Tokenomics</Styled.Link>
        <Styled.Link>Statistics</Styled.Link>
        <Styled.Link>Dashboard</Styled.Link>
        <Styled.Link>Blog</Styled.Link>
      </Styled.LinkBlock>
    </Styled.Container>
  )
}
