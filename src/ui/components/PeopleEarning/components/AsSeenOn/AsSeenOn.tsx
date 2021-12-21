import React, { FC } from 'react'

import { Styled } from './styles'
import CoindeskIcon from './coindesk.inline.svg'
import CointelegraphIcon from './cointelegraph.inline.svg'

export const AsSeenOn: FC = () => {
  return (
    <Styled.Container>
      <Styled.Text>As seen on</Styled.Text>
      <Styled.BottomBlockContainer>
        <Styled.CoindeskContainer>
          <CoindeskIcon />
        </Styled.CoindeskContainer>
        <Styled.CointelegraphContainer>
          <CointelegraphIcon />
        </Styled.CointelegraphContainer>
      </Styled.BottomBlockContainer>
    </Styled.Container>
  )
}
