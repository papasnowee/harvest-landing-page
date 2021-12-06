import React, { FC } from 'react'

import { Styled } from './styles'
import { IconsMap } from './icons/map'
import { Icon } from './Icon'

export interface IProps {
  circleColor?: string
  text: string
  icon: keyof typeof IconsMap
}

export const Company: FC<IProps> = (props) => {
  const { text, icon, circleColor } = props

  return (
    <Styled.Container>
      {!circleColor && <Icon iconName={icon} />}
      {circleColor && (
        <Styled.Circle circleColor={circleColor}>
          <Icon iconName={icon} circleColor={circleColor} />
        </Styled.Circle>
      )}
      <Styled.TextContainer>{text}</Styled.TextContainer>
    </Styled.Container>
  )
}
