import React, { FC } from 'react'

import sushiswap from './sushiswap.inline.svg'
import curve from './curve.inline.svg'
import uniswap from './uniswap.inline.svg'
import balancer from './balancer.inline.svg'
import compoundImage from './compoundPNG.png'
import ethereum from './ethereum.inline.svg'
import stablecoins from './stablecoins.inline.svg'
import kyberImage from './kyber.png'

const kyber: FC = () => <img src={kyberImage} />
const compound: FC = () => <img src={compoundImage} />

export const IconsMap = {
  kyber,
  stablecoins,
  ethereum,
  balancer,
  compound,
  sushiswap,
  curve,
  uniswap,
}
