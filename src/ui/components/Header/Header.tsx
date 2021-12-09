import React, { FC, useEffect, useState } from 'react'

import { Logo } from '@/ui/components/Header/components/Logo'
import { Styled } from './styles'
import { ButtonBlock } from './components/ButtonBlock'
import { MenuButton } from '../MenuButton'
import { Portal } from '@/ui/components/Portal'
import { Modal } from './components/Modal'

export interface ScrolledDown {
  scrolledDown: boolean
}

export const Header: FC = () => {
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

  return (
    <Styled.Wrapper scrolledDown={scrolledDown}>
      {isVisible && (
        <Portal>
          <Modal closeModal={closeModal} />
        </Portal>
      )}
      <Styled.ContainerWithConstantWidth>
        <Styled.CenteringWrapper>
          <Logo />
          <MenuButton onPress={openModal} />
          <Styled.ButtonBlockWrapper>
            <ButtonBlock scrolledDown={scrolledDown} />
          </Styled.ButtonBlockWrapper>
        </Styled.CenteringWrapper>
      </Styled.ContainerWithConstantWidth>
    </Styled.Wrapper>
  )
}
