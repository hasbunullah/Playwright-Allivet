const { test, expect } = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');
const {CartPage} = require('../pages/CartPage');
const {LoginPage} = require('../pages/LoginPage');


let loginPage;
let homePage;
let cartPage;


test.beforeEach(async ({ page }) => {

  homePage= new HomePage(page);
  cartPage = new CartPage(page);
  loginPage = new LoginPage(page);
  
});

test('Verify the product is added to the cart', async ({page}) => {
    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await homePage.searchItem('49755');
    await homePage.selectItem();
    await cartPage.addItemToCart();
    const getCartValue = await page.locator('.product-name').textContent();
    expect(getCartValue).toContain('Oratene Veterinarian Toothpaste Gel, 2.5 oz');

});

test('Verify that the sum of the product price is correct', async ({page}) => {
  await loginPage.goto();
  await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
  await page.waitForTimeout(8000);
  await homePage.searchItem('49755');
  await homePage.selectItem();
  await cartPage.addItemToCart();
  await page.waitForTimeout(3000);
  await cartPage.priceCheck();
  const {addedValue, priceFloat3 } = await cartPage.priceCheck();
  expect(addedValue).toBe(priceFloat3); 
});