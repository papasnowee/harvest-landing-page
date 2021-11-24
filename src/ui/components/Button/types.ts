import React, { ForwardedRef, PropsWithChildren } from 'react'

import { IconProps } from '@/ui/Icon/types'

export type ButtonProps = PropsWithChildren<{
  kind?: ButtonKind
  iconProps?: Omit<IconProps, 'color'>
  inverted?: boolean
  onClick?(evt: React.MouseEvent<HTMLButtonElement>): void
}>

export type StyledButtonProps = ButtonProps & {
  ref: ForwardedRef<HTMLButtonElement>
  isHasChildren: boolean
}

export type IconBoxProps = Pick<ButtonProps, 'inverted'> & {
  isHasChildren: boolean
}

export enum ButtonKind {
  COMMON = 'common',
  ACCENT = 'accent',
}
