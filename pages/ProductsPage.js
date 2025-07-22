class ProductsPage{
  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page;
        this.addToCartBtn= page.locator('button.btn_inventory');
        this.cartIconBtn = page.locator('#shopping_cart_container > a');
        this.removeFromCartBtn=page.locator('button[id^="remove"]');
    }
 async goToCart(){
  await this.cartIconBtn.click(); 
}

async addCartChangedToRemove(){
  const count =await this.removeFromCartBtn.count();
   for (let i = 0; i < count; i++) {
    const isVisible = await this.removeFromCartBtn.nth(i).isVisible();
    if (!isVisible) return false;
  }
  return true;
}

async addThreeProductsToCart() {
    const count= await this.addToCartBtn.count();
    const validIndices = Array.from({ length: count }, (_, i) => i).filter(i => i !== 2);
   const shuffled = validIndices.sort(() => 0.5 - Math.random());
  const randomThree = shuffled.slice(0, 3);
  for (const index of randomThree) {
    await this.addToCartBtn.nth(index).click();
  }
  }
}

module.exports = ProductsPage;