import React, { FC } from 'react'

import { Styled } from './styles'
import CoindeskIcon from './coindesk.inline.svg'
import CointelegraphIcon from './cointelegraph.inline.svg'

export const AsSeenOn: FC = () => {
  return (
    <Styled.Container>
      <Styled.Text>As seen on</Styled.Text>
      <Styled.BottomBlockContainer>
        <Styled.CoindeskContainer href="https://www.coindesk.com/markets/2020/10/21/harvest-finance-doubles-total-value-locked-to-704m-in-one-week/">
          <CoindeskIcon />
        </Styled.CoindeskContainer>
        <Styled.CointelegraphContainer href="https://cointelegraph.com/news/defi-sector-tokens-offer-shelter-as-bitcoin-falls-below-48-5k">
          <CointelegraphIcon />
        </Styled.CointelegraphContainer>
      </Styled.BottomBlockContainer>
    </Styled.Container>
  )
}
