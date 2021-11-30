import React, { FC } from 'react'

import { FriendlyCompanies } from '@/ui/components/FriendlyCompanies'
import { Button } from '@/ui/components/Button'
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
        <Button width="225px" color="yellow" text="Start Earning Now" />
      </Styled.LeftBlock>
      <FriendlyCompanies />
    </Styled.Container>
  )
}
