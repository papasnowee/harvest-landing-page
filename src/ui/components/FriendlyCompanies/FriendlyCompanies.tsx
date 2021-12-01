import React, { FC } from 'react'

import { IconsMap } from './icons/map'
import { Styled } from './styles'

const SushiSVG = IconsMap.sushiswap

export const FriendlyCompanies: FC = () => {
  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.CompanyContainer width="125px" mobileWidth="92px">
        <SushiSVG width="15px" height="15px" />
        <Styled.TextContainerSushiswap>Sushiswap</Styled.TextContainerSushiswap>
      </Styled.CompanyContainer>
    </Styled.Container>
  )
}
