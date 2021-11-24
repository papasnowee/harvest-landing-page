import React from 'react'
import { Meta } from '@storybook/react'

import { Paragraph } from '@/ui/typography/Paragraph'
import { Input } from '../Input'
import { Styled } from './styles'

import { InputProps } from '../types'

export default {
  title: 'UI/Input',
  component: Input,
} as Meta

export const InputText = (args: InputProps) => {
  return (
    <Styled.Wrapper>
      <Paragraph>Enter a wallet address for read-only mode</Paragraph>
      <Paragraph>
        <Input
          type="text"
          placeholder="Enter address"
          width={args.width}
          height={args.height}
          onChange={args.onChange}
        />
      </Paragraph>
    </Styled.Wrapper>
  )
}

InputText.args = {
  width: '405px',
  height: '45px',
}

InputText.argTypes = {
  onChange: { action: 'change' },
}
