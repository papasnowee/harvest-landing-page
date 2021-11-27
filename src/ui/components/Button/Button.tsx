import React, { FC } from 'react'

import { Styled } from './styles'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => (
  <Styled.Button {...props}>
    <Styled.TextWrapper>{props.text}</Styled.TextWrapper>
  </Styled.Button>
)

Button.displayName = 'Button'
