import { Theme } from '@/ui/themes'

import { ButtonProps, ButtonKind } from './types'

const isAccentKind = (kind: ButtonProps['kind']) => kind === ButtonKind.ACCENT

export const getButtonBackground = (
  props: Pick<ButtonProps, 'inverted' | 'kind'>,
  palette: Theme['palette'],
): string => {
  const { inverted, kind } = props

  if (isAccentKind(kind)) {
    return palette.accent
  }

  return inverted ? palette.active : palette.buttonBg
}

export const getButtonColor = (
  props: Pick<ButtonProps, 'inverted' | 'kind'>,
  palette: Theme['palette'],
): string => {
  const { inverted, kind } = props

  if (isAccentKind(kind)) {
    return palette.textActive
  }

  return inverted ? palette.buttonBg : palette.buttonText
}
