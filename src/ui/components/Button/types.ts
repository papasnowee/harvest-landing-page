import React from 'react'

type ButtonColor = 'blue' | 'yellow'

export type ButtonProps = {
  text: string
  width?: string
  mobileWidth?: string
  color: ButtonColor
  onClick?(evt: React.MouseEvent<HTMLButtonElement>): void
}
