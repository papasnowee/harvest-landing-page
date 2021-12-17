import React, { FC, useState } from 'react'

import { Styled } from './styles'

import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = (props) => {
  const { href, onPress, text } = props
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    if (onPress) {
      onPress()
    }
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }
  return href !== undefined ? (
    <Styled.Link href={href}>
      <Styled.Button isClicked={isClicked} {...props}>
        {text}
      </Styled.Button>
    </Styled.Link>
  ) : (
    <Styled.Button isClicked={isClicked} onClick={handleClick} {...props}>
      {text}
    </Styled.Button>
  )
}
