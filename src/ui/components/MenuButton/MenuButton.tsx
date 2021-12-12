import React, { FC } from 'react'

import { Styled } from './styles'

export interface Props {
  onPress: () => void
  color: string
}

export const MenuButton: FC<Props> = (props) => {
  const { onPress, color } = props

  return (
    <Styled.Container>
      <Styled.ContainerAbsolute onClick={onPress}>
        <Styled.LineWrapper>
          <Styled.Line color={color} />
          <Styled.Line color={color} />
          <Styled.Line color={color} />
        </Styled.LineWrapper>
      </Styled.ContainerAbsolute>
    </Styled.Container>
  )
}
