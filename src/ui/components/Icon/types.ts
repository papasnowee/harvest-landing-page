import HarvestLogo from '@/pictures/harvest-logo.inline.svg'
import { Color } from '@/ui/style'

export const IconList = {
  HARVEST_LOGO: HarvestLogo,
}

export type IconProps = {
  iconName: keyof typeof IconList
  width?: string
  height?: string
  rotate?: number
  color?: keyof typeof Color
}
