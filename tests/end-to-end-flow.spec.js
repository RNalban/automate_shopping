const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CheckOutOverviewPage = require('../pages/CheckOutOverviewPage');
const CheckOutCompletePage = require('../pages/CheckOutCompletePage');
const CheckOutInfoPage = require('../pages/CheckOutInfoPage');
const CartPage = require('../pages/CartPage');

test.describe.configure({ mode: 'serial' });
const credentials = {
  chromium: { username: process.env.CHROME_USER, password: process.env.CHROME_PASS, },
  firefox: { username: process.env.FIREFOX_USER, password: process.env.FIREFOX_PASS },
 
};
test.describe('login as registered user', () => {
  let context;
  let page;


  test.beforeAll(async ({ browserName,browser }) => {
     const credentials = {
    chromium: { username: process.env.CHROME_USER, password: process.env.CHROME_PASS },
    firefox: { username: process.env.FIREFOX_USER, password: process.env.FIREFOX_PASS }
  };

  const { username, password } = credentials[browserName];
    context = await browser.newContext();
    page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);
    await page.waitForURL('/inventory.html');
  });

  test.afterAll(async () => {
    if (context) {
    await context.close();
  }
  });


  test('add any 3 products to cart', async () => {
    
    const productsPage = new ProductsPage(page);
    await productsPage.addThreeProductsToCart();
    expect(await productsPage.addCartChangedToRemove()).toBe(true)
    await productsPage.goToCart();

  });

  test('review cart items', async () => {
    await page.waitForURL('/cart.html');
    const cartPage = new CartPage(page);
    expect(await cartPage.countProductsInCart()).toBe(3);
    await cartPage.checkOut();
  });

  test('fill checkout information',async()=>{
    await page.waitForURL('/checkout-step-one.html');
    const checkOutInfoPage = new CheckOutInfoPage(page);
    await checkOutInfoPage.enter('John','Doe','12345');
    await checkOutInfoPage.continue();
  });

  test('review checkout order',async()=>{
    await page.waitForURL('/checkout-step-two.html');
    const checkOutOverviewPage = new CheckOutOverviewPage(page);
    expect(await checkOutOverviewPage.getTotalPrice()).toBeGreaterThan(0);
    await checkOutOverviewPage.finish();
  });

  test('verify order confirmation', async()=>{
     await page.waitForURL('checkout-complete.html');
        const checkOutCompletePage = new CheckOutCompletePage(page);
        expect(await checkOutCompletePage.isImageDisplayed()).toBe(true)
        const message=await checkOutCompletePage.getOrderConfirmationMessage();
        expect(message).toContain('Thank you');
         await checkOutCompletePage.logOut();
  });

  test('log out after confirmation', async() =>{
    await expect(page).toHaveURL('/');
    const loginPage = new LoginPage(page)
    expect(await loginPage.isLoginButtonDisplayed()).toBe(true);
  })

});