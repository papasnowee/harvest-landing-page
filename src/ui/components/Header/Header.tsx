import React, { FC, useEffect, useState } from 'react'

import { Logo } from '@/ui/components/Header/components/Logo'
import { Styled } from './styles'
import { ButtonBlock } from './components/ButtonBlock'
import { MenuButton } from '../MenuButton'
import { Portal } from '@/ui/components/Portal'
import { Modal } from './components/Modal'
import { Color } from '@/ui/style'

export interface ScrolledDown {
  scrolledDown: boolean
}

interface Props {
  modalRoot: React.MutableRefObject<Element>
}

export const Header: FC<Props> = (props) => {
  const modalRoot = props.modalRoot.current
  const [scrolledDown, setScrolledDown] = useState(false)

  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  const onScroll = () => {
    if (window.pageYOffset > 55 && !scrolledDown) {
      setScrolledDown(true)
    }
    if (window.pageYOffset < 55 && scrolledDown) {
      setScrolledDown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  })

  const menuButtonColor = scrolledDown ? Color.black : Color.white

  return (
    <Styled.Wrapper scrolledDown={scrolledDown}>
      {isVisible && (
        <Portal modalRoot={modalRoot}>
          <Modal closeModal={closeModal} />
        </Portal>
      )}
      <Styled.ContainerWithConstantWidth>
        <Styled.CenteringWrapper>
          <Logo />
          <MenuButton onPress={openModal} color={menuButtonColor} />
          <Styled.ButtonBlockWrapper>
            <ButtonBlock scrolledDown={scrolledDown} />
          </Styled.ButtonBlockWrapper>
        </Styled.CenteringWrapper>
      </Styled.ContainerWithConstantWidth>
    </Styled.Wrapper>
  )
}
