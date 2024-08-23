require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
import { faker } from '@faker-js/faker';

let loginPage;

test.beforeEach(async ({ page }) => {

  loginPage = new LoginPage(page);
 
});

test('Verfiy that user can create an account', async ( {page}) => {
  const randomEmail = faker.internet.email(); 
  await loginPage.goto()
  await loginPage.createAccount('hamid', 'Hussain', randomEmail);
  await expect(page).toHaveURL('https://sfcc.petfoodking.com/account?registration=submitted');
  console.log('The email is: ', randomEmail)
});

test('Verify that the user can login with valid credentials', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await expect(page).toHaveURL('/account?registration=false');
  });

