import React, { FC } from 'react'

import { Styled } from './styles'
import { IconsMap } from '../icons/map'

interface IconProps {
  iconName: keyof typeof IconsMap
  circleColor?: string
}

export const Icon: FC<IconProps> = (props) => {
  const { iconName, circleColor } = props
  const SVG = IconsMap[iconName]
  return (
    <Styled.SVGContainer circleColor={circleColor}>
      <SVG />
    </Styled.SVGContainer>
  )
}
