import { render, screen } from '@testing-library/svelte'
import Hello from './Hello.svelte'

describe('Hello.svelte', () => {
	it('mounts', () => {
		render(Hello, { name: 'Vitest' })

		const title = screen.getByText('Hello, Vitest!')
		expect(title).toBeTruthy()
	})
})
