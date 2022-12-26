import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import * as stories from './Button.stories'
import userEvent from '@testing-library/user-event'

const { Preview, Something } = composeStories(stories)

describe('Preview', () => {
  it('Be visible', () => {
    const { getByRole } = render(<Preview />)
    const button = getByRole('button')

    expect(button).toBeVisible()
  })
})

describe("Something", () => {
  it("Be clickable", async () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Something onClick={onClick} />)
    const button = getByRole('button')

    await userEvent.click(button)

    expect(onClick).toBeCalled()
    expect(onClick).toBeCalledTimes(1)
  })
})
