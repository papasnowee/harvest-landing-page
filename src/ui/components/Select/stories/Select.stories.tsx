import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Select } from '../Select'
import { Styled } from './styles'

export default {
  title: 'UI/Select',
  component: Select,
} as Meta

const options = [
  'USD',
  'RUB',
  'USDT',
  'SOME',
  'FARM',
  'USD',
  'RUB',
  'USDT',
  'SOME',
  'FARM',
]

const Template: Story = (args) => {
  return (
    <Styled.Wrapper>
      <Select {...args} options={options} />
    </Styled.Wrapper>
  )
}

export const Default = Template.bind({})

Default.args = {}
