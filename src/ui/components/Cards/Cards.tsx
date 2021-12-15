import React, { FC } from 'react'

import { Card } from './components/Card'
import { Styled } from './styles'
import harvestIcon from './harvest.inline.svg'
import farmerIcon from './farmer.inline.svg'

const iconProps1 = {
  icon: harvestIcon,
  width: '129.41px',
  height: '116.46px',
  widthMobile: '95.97px',
  heightMobile: '86.91px',
}

const mainText1 = '$FARM tokenomics'
const text1 =
  "$FARM is at heart of Harvest's protocols, allowing you to capitalize on the overall success of our platform."

const buttonProps1 = {
  text: 'Discover $FARM',
  width: '260px',
  mobileWidth: '100%',
  color: 'blue',
}

const iconProps2 = {
  icon: farmerIcon,
  width: '134px',
  height: '134px',
  widthMobile: '100px',
  heightMobile: '100px',
}

const mainText2 = 'Work with us'

const text2: FC = () => (
  <span>
    Harvest is a platform run by the community.
    <br />
    Join us on this adventure!
  </span>
)

const buttonProps2 = {
  text: 'Discover $FARM',
  width: '260px',
  mobileWidth: '100%',
  color: 'blue',
}

export const Cards: FC = () => {
  return (
    <Styled.Container>
      <Card iconProps={iconProps1} mainText={mainText1} text={text1} button={buttonProps1} />
      <Card iconProps={iconProps2} mainText={mainText2} text={text2} button={buttonProps2} />
    </Styled.Container>
  )
}
