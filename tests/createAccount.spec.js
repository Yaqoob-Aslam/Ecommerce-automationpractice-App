import { test, expect, chromium } from '@playwright/test';

test.describe.serial('Swag Labs', () => {

  let browser, context, page;
  const BASE_URL = 'http://www.automationpractice.pl/index.php';

  test.beforeAll(async () => {
    browser = await chromium.launch({headless: false, args: ['--start-maximized']});
    context = await browser.newContext({viewport: null,deviceScaleFactor: undefined});
    page = await context.newPage();
  });
    function generateUniqueEmail() {
    const firstNames = ['John', 'Emma', 'Alex', 'Sophia', 'Liam', 'Olivia'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Davis'];

    // Pick random names
    const uniqueFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const uniqueLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Create a random 4-digit group number
    const groupNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine into a unique email
    const uniqueEmail = `${uniqueFirstName.toLowerCase()}.${uniqueLastName.toLowerCase()}${groupNumber}@mailinator.com`;

    return uniqueEmail;
    }

    // Example usage:
    const email = generateUniqueEmail();
    console.log(email);

  test('Account creation', async () => {
     await page.goto(BASE_URL, { timeout: 120000 });
     await page.locator("xpath=//a[normalize-space()='Sign in']").click();
     await page.locator('#email_create').click();
     await page.locator('#email_create').fill(email);
     await page.getByRole('button', { name: ' Create an account' }).click();
     await page.getByRole('heading', { name: 'Your personal information' }).click();
     await page.getByText('Title').click();
     await page.getByRole('radio', { name: 'Mr.' }).check();

     await page.getByRole('textbox', { name: 'First name *' }).fill('John');
     await page.getByRole('textbox', { name: 'Last name *' }).fill('Doe');
     await page.getByRole('textbox', { name: 'Password *' }).fill('Password123');
    });


  test.afterAll(async () => {
     await page.pause();
     //await browser.close();
  });
});