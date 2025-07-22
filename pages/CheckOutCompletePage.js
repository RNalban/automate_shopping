class CheckOutCompletePage{
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page;
        this.orderConfirmationMessage=page.locator('h2.complete-header');
        this.backHomeBtn=page.locator('#back-to-products');
        this.reactBtn=page.locator('#react-burger-menu-btn');
        this.logoutBtn=page.locator('#logout_sidebar_link');
    }
    async getOrderConfirmationMessage(){
        return await this.orderConfirmationMessage.innerText();
    }
    async backHomeBtn(){
        await this.backHomeBtn.click();
    }
    async isImageDisplayed() {
    return await this.page.locator('#checkout_complete_container > img').isVisible();
  }
 async logOut(){
    await this.reactBtn.click();
    await this.logoutBtn.click();
 }
}
module.exports = CheckOutCompletePage;