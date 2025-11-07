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

    // 🔹 Generate random user data
    function generateUserData() {
    const firstNames = ['John', 'Emma', 'Liam', 'Olivia', 'Ava', 'Noah', 'Sophia', 'Ethan', 'Mia', 'Lucas'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Clark', 'Lewis', 'Walker', 'Hall', 'Allen'];

    const uniqueFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const uniqueLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    // Random strong password with name + special chars + random number
    const uniquePassword = `${uniqueFirstName}${uniqueLastName}@${Math.floor(1000 + Math.random() * 9000)}`;

    // Random DOB
    const day = `${Math.floor(1 + Math.random() * 28)}`; // 1–28
    const month = `${Math.floor(1 + Math.random() * 12)}`; // 1–12
    const year = `${Math.floor(1980 + Math.random() * 20)}`; // 1980–1999

    return { uniqueFirstName, uniqueLastName, uniquePassword, day, month, year };
    }
    const { uniqueFirstName, uniqueLastName, uniquePassword, day, month, year } = generateUserData();

  test('Account creation', async () => {
     await page.goto(BASE_URL, { timeout: 120000 });
     await page.locator("xpath=//a[normalize-space()='Sign in']").click();
     await page.locator('#email_create').click();
     await page.locator('#email_create').fill(email);
     await page.getByRole('button', { name: ' Create an account' }).click();
     await page.getByRole('heading', { name: 'Your personal information' }).click();
     await page.getByText('Title').click();
     await page.getByRole('radio', { name: 'Mr.' }).check();

     await page.getByRole('textbox', { name: 'First name *' }).fill(uniqueFirstName);
     await page.getByRole('textbox', { name: 'Last name *' }).fill(uniqueLastName);
     await page.getByRole('textbox', { name: 'Password *' }).fill(uniquePassword);
     console.log(`Generated Password: ${uniquePassword}`);

     await page.locator('#days').selectOption(day);
     await page.locator('#months').selectOption(month);
     await page.locator('#years').selectOption(year);
     await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check(); 
     await page.getByRole('button', { name: 'Register ' }).click();
     await expect(page.getByText('Your account has been created.')).toBeVisible();
 });

  test.afterAll(async () => {
     await page.pause();
  });
});