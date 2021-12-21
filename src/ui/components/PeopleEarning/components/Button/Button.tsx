import React, { FC } from 'react'

import { Styled } from './styles'
import GrayArrowIcon from './grayArrow.inline.svg'
import WhiteArrowIcon from './whiteArrow.inline.svg'

interface Props {
  isActive: boolean
  leftOrRight: 'left' | 'right'
  onPress: () => void
}

export const Button: FC<Props> = (props) => {
  const { isActive, onPress, leftOrRight } = props
  return (
    <Styled.Container isActive={isActive} onClick={onPress}>
      {leftOrRight === 'right' ? (
        <Styled.RightIconContainer>
          {!isActive && <GrayArrowIcon />}
          {isActive && <WhiteArrowIcon />}
        </Styled.RightIconContainer>
      ) : (
        <Styled.LeftIconContainer>
          {!isActive && <GrayArrowIcon />}
          {isActive && <WhiteArrowIcon />}
        </Styled.LeftIconContainer>
      )}
    </Styled.Container>
  )
}
