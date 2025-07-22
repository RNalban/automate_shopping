class CheckOutInfoPage{
      /**
   * @param {import('@playwright/test').Page} page
   */
   constructor(page){
    this.firstName=page.locator('#first-name');
    this.lastName= page.locator('#last-name');
    this.zipCode=page.locator('#postal-code');
    this.continueBtn=page.locator('#continue');
   } 
   async enter(firstName,lastName,zipCode){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode)
    
   }
   async continue(){
    await this.continueBtn.click();
   }
}
module.exports = CheckOutInfoPage;