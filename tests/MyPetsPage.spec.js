require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { MyPetsPage } = require('../pages/MyPetsPage');


let loginPage;
let homePage;
let petsPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  petsPage = new MyPetsPage(page);
});

test('Verify that the user can add a pet', async ({ page }) => {
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await expect(page).toHaveURL('/account?registration=false');
  await homePage.myAccountMenu();
  await petsPage.addPet();
});

test('Verify that the user can Remove a pet', async ({ page }) => {
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await expect(page).toHaveURL('/account?registration=false');
  await homePage.myAccountMenu();
  await petsPage.removePet();
});
