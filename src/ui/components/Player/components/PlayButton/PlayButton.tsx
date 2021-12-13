import React, { FC } from 'react'

import { Styled } from './styles'
import TriangleIcon from './triangle.inline.svg'

export const PlayButton: FC = () => {
  return (
    <Styled.Circle1>
      <Styled.Circle2>
        <Styled.Circle3>
          <Styled.SVGContainer>
            <TriangleIcon />
          </Styled.SVGContainer>
        </Styled.Circle3>
      </Styled.Circle2>
    </Styled.Circle1>
  )
}
