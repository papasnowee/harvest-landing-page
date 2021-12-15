import React, { FC } from 'react'

import { Styled } from './styles'
import { Button, ButtonProps } from '@/ui/components/Button'

interface IconProps {
  icon: any
  width: string
  height: string
  mobileWidth: string
  mobileHeight: string
}

interface Props {
  iconProps: IconProps
  mainText: string
  text: string | FC
  button: ButtonProps
}

export const Card: FC<Props> = (props) => {
  const {
    iconProps,
    iconProps: { icon },
    mainText,
    text,
    button,
  } = props
  const Icon = icon
  const Text = text

  return (
    <Styled.Container>
      <Styled.IconContainer {...iconProps}>
        <Icon />
      </Styled.IconContainer>
      <Styled.MainTextContainer>{mainText}</Styled.MainTextContainer>
      <Styled.Text>{typeof text === 'string' ? text : <Text />}</Styled.Text>
      <Button {...button} />
    </Styled.Container>
  )
}
