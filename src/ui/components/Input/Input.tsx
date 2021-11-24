import React, { FC } from 'react'

import { Styled } from './styles'

import type { InputProps } from './types'

export const Input: FC<InputProps> = (props) => {
  return <Styled.Input {...props}>{props.children}</Styled.Input>
}
