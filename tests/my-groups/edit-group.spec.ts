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
    await page.goto('https://chat-app-final-two.vercel.app/all-groups')
    await page.locator('//*[@id="__next"]/div/div[2]/div[2]/div/div[1]/div/a').click()
    await expect(page.locator('text=Update group')).toHaveCount(2);

    const nameInputFeild = page.getByPlaceholder('Enter group name')
    await nameInputFeild.fill('Riaz-group-6');
    await page.getByRole('combobox').selectOption('{"email":"meraz@gmail.com","id":102,"name":"Meraz","role":"member"}');
    page.once('dialog', dialog => {
        const text = dialog.message()
        console.log(`Dialog message: ${text}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Update group' }).click();
    // need assertion to check the alert message with expected value.

    await page.pause()
})

test.afterAll(async ({ page }) => {
    await page.close()
});
