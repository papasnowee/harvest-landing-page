import React, { PropsWithChildren } from 'react'

type ButtonColor = 'blue' | 'yellow'

export type ButtonProps = PropsWithChildren<{
  text: string
  width?: string
  color: ButtonColor
  onClick?(evt: React.MouseEvent<HTMLButtonElement>): void
}>
