import { fireEvent, render } from '@testing-library/svelte'
import Counter from './Counter.svelte'

describe('Counter.svelte', () => {
  // test counter increment
  it('should increse count when button is clicked', async () => {
    const { getByText, getByTestId } = render(Counter)
    const button = getByText('Click me!')
    const count = getByTestId('count')

    await fireEvent.click(button)

    expect(count.textContent).toEqual('Total clicks is 1')
  })

  it(`should reset count to 0 when "reset" button is clicked`, async () => {
    const { getByText, getByTestId } = render(Counter, { count: 10 })
    const resetButton = getByText('Reset!')
    const count = getByTestId('count')

    await fireEvent.click(resetButton)

    expect(count.textContent).toEqual('Total clicks is 0')
  })
})
