type ButtonColor = 'blue' | 'yellow'

export type ButtonProps = {
  href?: string
  text: string
  width?: string
  mobileWidth?: string
  color: ButtonColor
  onPress?: () => void
}
