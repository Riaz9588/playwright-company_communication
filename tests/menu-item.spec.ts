import { test, expect } from '@playwright/test';

// Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/)

test.beforeEach(async ({ page }) => {
    await page.goto('https://chat-app-final-two.vercel.app/auth/signin')
    await page.getByPlaceholder('User Email').fill('mdriaz@gmail.com')
    await page.getByPlaceholder('******************').fill('123456')
    await page.locator('//*[@id="__next"]/div/div/form/div[3]/button').click()

    await page.waitForURL('https://chat-app-final-two.vercel.app/dashboard')
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/dashboard')
})

test('Menu item test', async ({ page }) => {
    await page.goto('https://chat-app-final-two.vercel.app/dashboard')
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/dashboard')

    await page.locator('//*[@id="__next"]/div/div[1]/div/a[2]').click()
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/all-groups')

    await page.getByRole('link', { name: 'Add Group' }).click()
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/add-group')

    await page.getByRole('link', { name: 'All Users' }).click()
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/all-users')

    await page.getByRole('link', { name: 'Add User' }).click()
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/add-user')

    await page.pause()
})

test.afterAll(async ({ page }) => {
    await page.close()
});
