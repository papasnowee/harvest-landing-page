import React, { FC, useState } from 'react'

import { Styled } from './styles'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }
  return (
    <Styled.Button isClicked={isClicked} onClick={handleClick} {...props}>
      {props.text}
    </Styled.Button>
  )
}
