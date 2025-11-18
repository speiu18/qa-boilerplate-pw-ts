import { test, expect } from '@playwright/test';
test.describe('Example tests', () => {

test('App title', async ({ page }) => {
  await page.goto('/abtest');

  // Expect a title.
  await expect(page).toHaveTitle(/The Internet/);
});

test('Welcome page first heading', async ({ page }) => {
  await page.goto('/');

  // Expects the first heading to contain an exact text match. 
  await expect(page.getByRole('heading').first()).toHaveText('Welcome to the-internet');
});

test('Welcome page second heading', async ({ page }) => {
  await page.goto('/');

  // Expects the second heading to contain an exact text match. 
  await expect(page.getByRole('heading').nth(1)).toHaveText('Available Examples');
})
})