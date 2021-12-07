import React, { FC } from 'react'

import { Styled } from './styles'

export interface Props {
  onPress: () => void
}

export const MenuButton: FC<Props> = (props) => {
  const { onPress } = props

  return (
    <Styled.Container>
      <Styled.ContainerAbsolute>
        <Styled.LineWrapper onClick={onPress}>
          <Styled.Line />
          <Styled.Line />
          <Styled.Line />
        </Styled.LineWrapper>
      </Styled.ContainerAbsolute>
    </Styled.Container>
  )
}
