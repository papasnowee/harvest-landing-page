import React, { FC } from 'react'

import { Styled } from './styles'
import HarvesterIcon from './harvester.inline.svg'
import TractorIcon from './tractor.inline.svg'
import { Button } from '@/ui/components/Button'

const firstCardtext =
  '$FARM is at the heart of Harvest; it allows you to capitalize on the growth and success of our platform.'

export const Cards: FC = () => {
  return (
    <Styled.Container>
      <Styled.CardContainer>
        <Styled.TractorIconContainer>
          <TractorIcon />
        </Styled.TractorIconContainer>
        <Styled.MainTextContainer>$FARM Reward Token</Styled.MainTextContainer>
        <Styled.Text>{firstCardtext}</Styled.Text>
        <Styled.ButtonContainer>
          <Button
            text="Explore $FARM"
            width="260px"
            mobileWidth="100%"
            color="blue"
            href="https://harvest-finance.gitbook.io/harvest-finance/general-info/what-do-we-do/profit-share-pool-and-farm-tokenomics"
          />
        </Styled.ButtonContainer>
      </Styled.CardContainer>

      <Styled.CardContainer>
        <Styled.FarmerIconContainer>
          <HarvesterIcon />
        </Styled.FarmerIconContainer>
        <Styled.MainTextContainer>Contribute and Earn</Styled.MainTextContainer>
        <Styled.Text>
          Harvest is a platform made for and run by the community.
          <br />
          Join us on this adventure and find your place!
        </Styled.Text>
        <Styled.ButtonContainer>
          <Button
            text="Explore opportunities"
            width="260px"
            mobileWidth="100%"
            color="blue"
            href="https://harvest.finance/work"
          />
        </Styled.ButtonContainer>
      </Styled.CardContainer>
    </Styled.Container>
  )
}
