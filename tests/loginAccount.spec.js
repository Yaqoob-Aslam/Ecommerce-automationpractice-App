import { test, expect, chromium } from '@playwright/test';

test.describe.serial('Swag Labs', () => {

  let browser, context, page;
  const BASE_URL = 'http://www.automationpractice.pl/index.php?controller=authentication&back=my-account';

  test.beforeAll(async () => {
    browser = await chromium.launch({headless: false, args: ['--start-maximized']});
    context = await browser.newContext({viewport: null,deviceScaleFactor: undefined});
    page = await context.newPage();
  });
 
  test('Login account', async () => {
     await page.goto(BASE_URL, { timeout: 120000 });
     await page.locator("xpath=//input[@id='email']").fill("john.brown8065@mailinator.com");
     await page.locator("xpath=//input[@id='passwd']").fill("LiamWalker@8909");
     await page.getByRole('button', { name: 'Sign in' }).click();
     await page.waitForTimeout(5000);
     await page.getByRole('link', { name: ' Home' }).click();
 });

  test.afterAll(async () => {
     await page.pause();
  });
});