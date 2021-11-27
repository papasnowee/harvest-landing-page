import React, { FC } from 'react'

import { Logo } from '@/ui/components/Header/components/Logo'
import { Styled } from './styles'
import { ButtonBlock } from './components/ButtonBlock'

export const Header: FC = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.Wrapper>
        <Logo />
        <Styled.ButtonBlockWrapper>
          <ButtonBlock />
        </Styled.ButtonBlockWrapper>
      </Styled.Wrapper>
    </Styled.HeaderContainer>
  )
}
