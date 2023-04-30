

// This test case is not completed yet!

import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://chat-app-final-two.vercel.app/auth/signin')
    await page.getByPlaceholder('User Email').fill('mdriaz@gmail.com')
    await page.getByPlaceholder('******************').fill('123456')
    await page.locator('//*[@id="__next"]/div/div/form/div[3]/button').click()

    await page.waitForURL('https://chat-app-final-two.vercel.app/dashboard')
    await expect(page).toHaveURL('https://chat-app-final-two.vercel.app/dashboard')
})

test('Add group component check', async ({ page }) => {
    // await page.pause()
    await page.getByRole('link', { name: 'Add Group' }).click();
    await page.getByPlaceholder('Enter group name').click();
    await page.getByPlaceholder('Enter group name').fill('new test group');
    // here this group should not be created as unique name required. So I have to check the alert and give assertion
    page.on('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Create group' }).click();
})

test.afterAll(async ({ page }) => {
    await page.close()
});
