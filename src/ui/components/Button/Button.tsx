import React, { FC } from 'react'

import { Styled } from './styles'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => (
  <Styled.Button {...props}>{props.text}</Styled.Button>
)
