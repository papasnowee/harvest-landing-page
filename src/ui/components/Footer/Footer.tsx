import React, { FC } from 'react'

import { BLOG, DASHBOARD, DOCS, STATISTICS, TOKENOMICS } from '@/constants'
import { Styled } from './styles'

export const Footer: FC = () => {
  const year = new Date().getFullYear()
  return (
    <Styled.Container>
      <Styled.Text>{year}, Harvest.</Styled.Text>
      <Styled.LinkBlock>
        <Styled.Link href={TOKENOMICS}>
          <Styled.ContainerForUnderline>Tokenomics</Styled.ContainerForUnderline>
        </Styled.Link>
        <Styled.Link href={STATISTICS}>
          <Styled.ContainerForUnderline>Statistics</Styled.ContainerForUnderline>
        </Styled.Link>
        <Styled.Link href={DASHBOARD}>
          <Styled.ContainerForUnderline>Dashboard</Styled.ContainerForUnderline>
        </Styled.Link>
        <Styled.Link href={BLOG}>
          <Styled.ContainerForUnderline>Blog</Styled.ContainerForUnderline>
        </Styled.Link>
        <Styled.Link href={DOCS}>
          <Styled.ContainerForUnderline>Docs</Styled.ContainerForUnderline>
        </Styled.Link>
      </Styled.LinkBlock>
    </Styled.Container>
  )
}
