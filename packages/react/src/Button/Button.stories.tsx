import { Meta, Story } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: "Button",
  component: Button
} as Meta

export const Preview: Story = (props: ButtonProps) => {
  return <Button {...props} />
}

Preview.args = {
  children: "hello"
}
