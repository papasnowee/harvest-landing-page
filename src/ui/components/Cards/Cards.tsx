import React, { FC } from 'react'

import { Styled } from './styles'
import HarvesterIcon from './harvester.inline.svg'
import TractorIcon from './tractor.inline.svg'
import { Button } from '@/ui/components/Button'

const firstCardtext =
  "$FARM is at heart of Harvest's protocols, allowing you to capitalize on the overall success of our platform."

export const Cards: FC = () => {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.TractorIconContainer>
          <TractorIcon />
        </Styled.TractorIconContainer>
        <Styled.MainTextContainer>$FARM tokenomics</Styled.MainTextContainer>
        <Styled.Text>{firstCardtext}</Styled.Text>
        <Styled.ButtonContainer>
          <Button text="Explore $FARM" width="260px" mobileWidth="100%" color="blue" />
        </Styled.ButtonContainer>
      </Styled.CardContainer>

      <Styled.CardContainerSecond>
        <Styled.FarmerIconContainer>
          <HarvesterIcon />
        </Styled.FarmerIconContainer>
        <Styled.MainTextContainer>Work with us</Styled.MainTextContainer>
        <Styled.Text>
          Harvest is a platform run by the community.
          <br />
          Join us on this adventure!
        </Styled.Text>
        <Styled.ButtonContainer>
          <Button text="Explore Opportunities" width="260px" mobileWidth="100%" color="blue" />
        </Styled.ButtonContainer>
      </Styled.CardContainerSecond>
    </Styled.Container>
  )
}
