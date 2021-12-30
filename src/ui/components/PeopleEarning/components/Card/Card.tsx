import React, { FC } from 'react'

import { Styled } from './styles'

interface Props {
  userAddress: string
  // percent: number
  perDay: number
  icon: any // svg import
}

const makePrettyCurrency = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}

const makePrettyNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
  }).format(number)
}

export const Card: FC<Props> = (props) => {
  const { icon, userAddress, perDay, percent } = props
  const Icon = icon
  const prettyPerDay = makePrettyCurrency(Number(perDay.toFixed(2)))
  // const prettyPercent = makePrettyNumber(Number(percent.toFixed(1)))

  const calcPercentSign = (percent: number) => {
    if (percent === 0) return ''
    return percent > 0 ? '+' : '-'
  }

  return (
    <Styled.Container>
      <Styled.IconContainer>
        <Icon />
      </Styled.IconContainer>
      <Styled.RightBlock>
        <Styled.UserAddress>{userAddress}</Styled.UserAddress>
        <Styled.BottomBlock>
          <Styled.PerDayContainer>{prettyPerDay} / day</Styled.PerDayContainer>
          {/* <Styled.Percent>
            {calcPercentSign(percent)}
            {prettyPercent}%
          </Styled.Percent> */}
        </Styled.BottomBlock>
      </Styled.RightBlock>
    </Styled.Container>
  )
}
