import React, { FC, useEffect, useState } from 'react'

import { Logo } from '@/ui/components/Header/components/Logo'
import { Styled } from './styles'
import { ButtonBlock } from './components/ButtonBlock'

export interface ScrolledDown {
  scrolledDown: boolean
}

export const Header: FC = () => {
  const [scrolledDown, setScrolledDown] = useState(false)

  const onScroll = () => {
    if (window.pageYOffset > 70 && !scrolledDown) {
      setScrolledDown(true)
    }
    if (window.pageYOffset < 70 && scrolledDown) {
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
      <Styled.HeaderContainer>
        <Styled.CenteringWrapper>
          <Logo />
          <Styled.ButtonBlockWrapper>
            <ButtonBlock scrolledDown={scrolledDown} />
          </Styled.ButtonBlockWrapper>
        </Styled.CenteringWrapper>
      </Styled.HeaderContainer>
    </Styled.Wrapper>
  )
}
