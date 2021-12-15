import React, { FC } from 'react'

import { Styled } from './styles'
import HarvestIcon from './harvest.inline.svg'
import FarmerIcon from './farmer.inline.svg'
import { Button } from '../Button'

const firstCardtext =
  "$FARM is at heart of Harvest's protocols, allowing you to capitalize on the overall success of our platform."

export const Cards: FC = () => {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.HarvestIconContainer>
          <HarvestIcon />
        </Styled.HarvestIconContainer>
        <Styled.MainTextContainer>$FARM tokenomics</Styled.MainTextContainer>
        <Styled.Text>{firstCardtext}</Styled.Text>
        <Styled.ButtonContainer>
          <Button text="Discover $FARM" width="260px" mobileWidth="100%" color="blue" />
        </Styled.ButtonContainer>
      </Styled.CardContainer>

      <Styled.CardContainerSecond>
        <Styled.FarmerIconContainer>
          <FarmerIcon />
        </Styled.FarmerIconContainer>
        <Styled.MainTextContainer>Work with us</Styled.MainTextContainer>
        <Styled.Text>
          Harvest is a platform run by the community.
          <br />
          Join us on this adventure!
        </Styled.Text>
        <Styled.ButtonContainer>
          <Button text="Explore Job Opportunities" width="260px" mobileWidth="100%" color="blue" />
        </Styled.ButtonContainer>
      </Styled.CardContainerSecond>
    </Styled.Container>
  )
}
