class CheckOutOverviewPage{
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page=page;
    this.totalPrice=page.locator('div.summary_total_label');
    this.finishBtn=page.locator('#finish');
    this.itemNames = page.locator('.inventory_item_name');

  }
 async getItemNames() {
    return await this.itemNames.allTextContents();
  }
  async getTotalPrice() {
    const priceText = await this.totalPrice.textContent();
    return parseFloat(priceText.replace('Total: $', ''));
  }
  async finish(){
    await this.finishBtn.click();
  }
}
module.exports = CheckOutOverviewPage;