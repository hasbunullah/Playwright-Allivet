
const { test, expect } = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');
const {CartPage} = require('../pages/CartPage');
const {CheckoutPage} = require('../pages/CheckoutPage');
const {LoginPage} = require('../pages/LoginPage');

let loginPage;
let homePage;
let cartPage;
let checkout;

test.beforeEach(async ({ page }) => {

  homePage = new HomePage(page);
  cartPage = new CartPage(page);
  checkout = new CheckoutPage(page);
  loginPage = new LoginPage(page);
  
});

test('User is able to add an item to the cart and checkout', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(process.env.USER_EMAIL, process.env.USER_PASSWORD);
    await page.waitForTimeout(8000);
    await homePage.searchItem('49755');
    await homePage.selectItem();
    await cartPage.addItemToCart();
    await expect(page).toHaveTitle('Your shopping cart');
    await cartPage.proceedToCheckout();
    await page.pause();
    await checkout.completeCheckout();
    const verifyOrder = await checkout.verifyOrder();
    expect(verifyOrder).toContain('Order Submitted Successfully!');
  });


