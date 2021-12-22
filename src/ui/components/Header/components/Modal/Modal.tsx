import React, { FC } from 'react'

import { BLOG, DASHBOARD, STATISTICS, TOKENOMICS } from '@/constants'
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
          <Styled.SemanticLi>
            <Styled.Link href={TOKENOMICS}>
              <div>Tokenomics</div>
            </Styled.Link>
          </Styled.SemanticLi>
          <Styled.SemanticLi>
            <Styled.Link href={STATISTICS}>
              <div>Statistics</div>
            </Styled.Link>
          </Styled.SemanticLi>
          <Styled.SemanticLi>
            <Styled.Link href={BLOG}>
              <div>Blog</div>
            </Styled.Link>
          </Styled.SemanticLi>
        </Styled.LinkContainer>
        <Styled.ButtonContainer>
          <Button text="Dashboard" width="194px" color="yellow" href={DASHBOARD} />
        </Styled.ButtonContainer>
      </Styled.LinksBlock>
      <Styled.CloseBlock onClick={closeModal} />
    </Styled.Container>
  )
}
