import { test, expect } from '@playwright/test';

test('login section test', async ({ page }) => {
    await page.goto('https://chat-app-final-two.vercel.app/auth/signin')
    await page.getByPlaceholder('User Email').fill('mdriaz@gmail.com');
    await page.getByPlaceholder('******************').fill('123456');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.waitForURL('https://chat-app-final-two.vercel.app/dashboard')
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/dashboard')

    await page.pause()
})
