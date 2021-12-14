import React, { FC } from 'react'

import { Button } from '@/ui/components/Button'
import { Styled } from './styles'

export const StartEarning: FC = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Text>Put your idle assets to work 24/7/365</Styled.Text>
        <Styled.Wrapper>
          <Styled.RectangleTop1 />
          <Styled.RectangleBot1 />
          <Styled.Rectangle1 />
          <Styled.RectangleTop2 />
          <Styled.RectangleBot2 />
          <Styled.Rectangle2 />
          <Styled.RectangleTop3 />
          <Styled.RectangleBot3 />
          <Styled.Rectangle3 />
        </Styled.Wrapper>

        <Styled.ButtonContainer>
          <Button text="Start Earning Now" color="yellow" width="300px" />
        </Styled.ButtonContainer>
      </Styled.Container>

      <Styled.ContainerMobile>
        <Styled.Text>
          Put your idle assets
          <br />
          to work 24/7/365
        </Styled.Text>
        <Button text="Start Earning Now" color="yellow" width="220px" />
      </Styled.ContainerMobile>
    </>
  )
}
