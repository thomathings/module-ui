import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { TextField, TextFieldProps } from './TextField'

type Component = typeof TextField
type Story = ComponentStoryObj<Component>
type Meta = ComponentMeta<Component>

const meta: Meta = {
  component: TextField
}
export default meta

export const Preview: Story = {
  args: {
    value: "preview"
  }
}

export const Something: Story = {
  args: {
    value: "Something"
  }
}