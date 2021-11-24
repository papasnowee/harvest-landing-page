import React, { FC } from 'react'

import { Styled } from './styles'

import type { PaperProps } from './types'

export const Paper: FC<PaperProps> = (props) => {
  return <Styled.Paper {...props}>{props.children}</Styled.Paper>
}
