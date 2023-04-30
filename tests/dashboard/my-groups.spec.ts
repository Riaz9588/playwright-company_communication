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

test('My group component check', async ({ page }) => {
    await page.goto('https://chat-app-final-two.vercel.app/dashboard')
    
    await page.locator('//*[@id="__next"]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[3]').click()

    await expect(page.locator('text=Riazadministration')).toHaveCount(1);
    await expect(page.locator('text=Johnmember')).toHaveCount(1);

    await expect(page.locator('text=Riaz: Hello! Done The scroll bar problem!10:59 AM')).toHaveCount(1);
    await expect(page.locator('text=John: Hello! John Again!11:11 AM')).toHaveCount(1);

    await page.pause()
})

test.afterAll(async ({ page }) => {
    await page.close()
});
