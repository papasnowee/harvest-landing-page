import React, { FC } from 'react'

import { FriendlyCompanies } from '@/ui/components/FriendlyCompanies'
import { Button } from '@/ui/components/Button'
import { Styled } from './styles'

export const FirstScreenBodyWeb: FC = () => {
  return (
    <Styled.ContainerWeb>
      <Styled.LeftBlock>
        <Styled.MainTextContainer>
          Earn Yield <br />
          on Your Crypto
        </Styled.MainTextContainer>
        <Styled.CaptionContainer>Put your idle assets to work 24/7/365</Styled.CaptionContainer>
        <Button
          width="225px"
          color="yellow"
          text="Start Earning Now"
          href="http://app.harvest.finance/"
        />
      </Styled.LeftBlock>
      <FriendlyCompanies />
    </Styled.ContainerWeb>
  )
}

export const FirstScreenBodyMobile: FC = () => {
  return (
    <Styled.ContainerMobile>
      <Styled.MainTextContainerMobile>
        Earn Yield
        <br />
        on Your Crypto
      </Styled.MainTextContainerMobile>
      <Styled.CaptionContainerMobile>
        Put your idle assets to work 24/7/365
      </Styled.CaptionContainerMobile>
      <FriendlyCompanies />
      <Button width="195px" color="yellow" text="Start Earning Now" />
    </Styled.ContainerMobile>
  )
}
