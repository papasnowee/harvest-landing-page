import styled from 'styled-components'

import { light } from '@/ui/themes'
import { convertRgbToRgba } from '@/utils'

const Overlay = styled.div((props) => {
  const { theme: { palette } = light } = props

  return `
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 80px;
    background-color: ${convertRgbToRgba(palette.overlay, 0.5)};
    backdrop-filter: blur(5px);
    overflow-y: scroll;
    overflow-x: hidden;
  `
})

const InnerContainer = styled.div((props) => {
  const { theme: { palette } = light } = props

  return `
    position: relative;
    display: inline-block;
    padding: 50px 40px;
    border-radius: 10px;
    background-color: ${palette.overlayInner}
  `
})

const CloseButton = styled.button(() => {
  return `
    position: absolute;
    top: 14px;
    right: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    padding: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
  `
})

export const Styled = {
  Overlay,
  InnerContainer,
  CloseButton,
}
