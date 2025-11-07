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

test("Category Page - One Option", async () => {
    const womenLink = page.locator('#block_top_menu').getByRole('link', { name: 'Women' });
    await womenLink.hover(); 
    await page.waitForTimeout(1000); 
    await page.getByRole('link', { name: ' T-shirts' }).click();

    // ✅ Wait for the category page to load completely
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Catalog')).toBeVisible();

    await expect(page.getByText('Catalog')).toBeVisible();
    await page.getByText('Size').click();
    await page.getByRole('checkbox', { name: 'S (1)' }).check();

    await expect(page.getByText('Color', { exact: true })).toBeVisible();
    await page.getByLabel('Orange (1)').click();

    await expect(page.getByText('Properties')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Short Sleeve (1)' }).check();

    await expect(page.getByText('Compositions')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Cotton (1)' }).check();

    await expect(page.getByText('Styles')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Casual (1)' }).check();

    await expect(page.getByText('Availability')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Not available (1)' }).check();

    await expect(page.getByText('Condition', { exact: true })).toBeVisible();
    await page.getByRole('checkbox', { name: 'New (1)' }).check();
    await page.mouse.move(0, 0);
  });

test("Category Page - Second Optopn Clear", async () => {
    await page.getByRole('checkbox', { name: 'S (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Short Sleeve (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Cotton (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Casual (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Not available (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'New (1)' }).uncheck();
    await page.mouse.move(0, 0);
});

test("Category Page - Third Option", async () => {
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Catalog')).toBeVisible();

    await expect(page.getByText('Catalog')).toBeVisible();
    await page.getByText('Size').click();
    await page.getByRole('checkbox', { name: 'M (1)' }).check();

    await expect(page.getByText('Color', { exact: true })).toBeVisible();
    await page.getByLabel('Orange (1)').click();

    await expect(page.getByText('Properties')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Short Sleeve (1)' }).check();

    await expect(page.getByText('Compositions')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Cotton (1)' }).check();

    await expect(page.getByText('Styles')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Casual (1)' }).check();

    await expect(page.getByText('Availability')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Not available (1)' }).check();

    await expect(page.getByText('Condition', { exact: true })).toBeVisible();
    await page.getByRole('checkbox', { name: 'New (1)' }).check();
    await page.mouse.move(0, 0);
});

test("Category Page - Forth Optopn Clear", async () => {
    await page.getByRole('checkbox', { name: 'M (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Short Sleeve (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Cotton (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Casual (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'Not available (1)' }).uncheck();
    await page.getByRole('checkbox', { name: 'New (1)' }).uncheck();
});

test.afterAll(async () => {
     await page.pause();
  });
});