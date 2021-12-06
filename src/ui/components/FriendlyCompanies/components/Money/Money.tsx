import React, { FC } from 'react'

import { Styled } from './style'
import MoneyIcon from './money.inline.svg'

export const Money: FC = () => {
  return (
    <Styled.FirstCircle>
      <Styled.SecondCircle>
        <Styled.SVGContainer>
          <MoneyIcon width="100%" height="100%" />
        </Styled.SVGContainer>
      </Styled.SecondCircle>
    </Styled.FirstCircle>
  )
}
