class CartPage{
      /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page=page;
        this.checkoutBtn=page.locator('#checkout');
        this.continueShoppingBtn=page.locator('#continue-shopping');
        this.productItems=page.locator('div.cart_item_label')
        
    }
    async countProductsInCart(){
        return await this.productItems.count()
    }
    async checkOut(){
        await this.checkoutBtn.click()
    }
    async continueShopping(){
        await this.checkoutBtn.click()
    }
}
module.exports = CartPage;