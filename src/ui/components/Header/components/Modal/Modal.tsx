import React, { FC } from 'react'

import { Button } from '@/ui/components/Button'
import { Styled } from './styles'

interface Props {
  closeModal: () => void
}

export const Modal: FC<Props> = (props) => {
  const { closeModal } = props

  return (
    <Styled.Container>
      <Styled.LinksBlock>
        <Styled.LinkContainer>
          <a>Tokenomics</a>
          <a>Statistics</a>
          <a>Blog</a>
        </Styled.LinkContainer>
        <Styled.ButtonContainer>
          <Button text="Dashboard" width="194px" color="yellow" />
        </Styled.ButtonContainer>
      </Styled.LinksBlock>
      <Styled.CloseBlock onClick={closeModal} />
    </Styled.Container>
  )
}
