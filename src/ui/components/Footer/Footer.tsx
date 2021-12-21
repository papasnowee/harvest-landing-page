import React, { FC } from 'react'

import { Styled } from './styles'

export const Footer: FC = () => {
  const year = new Date().getFullYear()
  return (
    <Styled.Container>
      <Styled.Text>{year}, Harvest.</Styled.Text>
      <Styled.LinkBlock>
        <Styled.Link href="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics">
          Tokenomics
        </Styled.Link>
        <Styled.Link href="https://farmdashboard.xyz/">Statistics</Styled.Link>
        <Styled.Link href="https://harvest.finance">Dashboard</Styled.Link>
        <Styled.Link href="https://medium.com/harvest-finance">Blog</Styled.Link>
        <Styled.Link href="https://harvest-finance.gitbook.io/">Docs</Styled.Link>
      </Styled.LinkBlock>
    </Styled.Container>
  )
}
