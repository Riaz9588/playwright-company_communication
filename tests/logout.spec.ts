import { test, expect } from '@playwright/test';

test('logout section test', async ({ page }) => {
    test.slow()
    await page.goto('https://chat-app-final-two.vercel.app/auth/signin')
    await page.getByPlaceholder('User Email').fill('mdriaz@gmail.com');
    await page.getByPlaceholder('******************').fill('123456');
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.waitForURL('https://chat-app-final-two.vercel.app/dashboard')
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/dashboard')

    await page.getByRole('button', { name: 'Log Out' }).click();
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/auth/signin')
    await expect(page.locator('text=Not have an account? Enter to sign-up page')).toHaveCount(1);
})


// await expect(page.locator('#__next > div > div > p > a')).toHaveAttribute('href', /.*value/)
// await expect(page).locator('//*[@id="__next"]/div/div/p/a')