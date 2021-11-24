import React, { FC } from 'react'

import { Styled } from './styles'

import { IconProps, IconList } from './types'

export const Icon: FC<IconProps> = ({ iconName, ...rest }) => {
  const SVG = IconList[iconName]
  return (
    <Styled.SVGBox {...rest}>
      <SVG width="100%" height="100%" />
    </Styled.SVGBox>
  )
}
