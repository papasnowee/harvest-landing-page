import React, { FC } from 'react'

import { Logo } from '@/ui/components/Header/components/Logo'
import { Styled } from './styles'

export const Header: FC = () => {
  return (
    <Styled.HeaderContainer>
      <Logo />
    </Styled.HeaderContainer>
  )
}
