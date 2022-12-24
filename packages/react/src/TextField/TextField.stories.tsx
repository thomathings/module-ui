import { Meta, Story } from '@storybook/react'
import { TextField, TextFieldProps } from './TextField'

export default {
  title: "TextField",
  component: TextField
} as Meta

export const Preview: Story = (props: TextFieldProps) => {
  return <TextField {...props} />
}
