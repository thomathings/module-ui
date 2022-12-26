import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from './Button'

type Component = typeof Button
type Story = ComponentStoryObj<Component>
type Meta = ComponentMeta<Component>

const meta: Meta = {
  component: Button
}
export default meta

export const Preview: Story = {
  args: {
    children: 'preview'
  }
}

export const Something: Story = {
  args: {
    children: 'something'
  }
}
