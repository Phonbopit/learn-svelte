import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible()
})

test.describe('Tutorials Page', () => {
  test.describe('01-HelloWorld', () => {
    test('h1 has expected text', async ({ page }) => {
      await page.goto('/tutorials')
      await expect(page.getByRole('heading', { name: 'Devahoy' })).toBeVisible()
    })
  })

  test.describe('02-Reactive', () => {
    test('should increase count by 1 when button is clicked.', async ({ page }) => {
      await page.goto('/tutorials')

      const button = await page.getByTestId('click-me')

      await button.click()

      await expect(page.getByText('Total count is 1')).toBeVisible()
    })
  })
})
