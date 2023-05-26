import { fireEvent, render } from '@testing-library/svelte';
import Counter from './Counter.svelte';

describe('Counter.svelte', () => {
  // test counter increment
  it('should increse count when button is clicked', async () => {
    const { getByText, getByTestId } = render(Counter);
    const button = getByText('Click me!');
    const count = getByTestId('count');

    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(count.textContent).toEqual('Total clicks is 2');
  });
});
