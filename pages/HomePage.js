class HomePage {
    constructor(page) {
      this.page = page;
      this.searchInput = page.locator('#search-results');
      this.shopNowBtn = page.locator('a.btn-primary.shop-now-btn')
    
    }
  
    async searchItem(itemCode) {
      await this.searchInput.click();
      await this.searchInput.type(itemCode);
      await this.searchInput.press('Enter');
    }
  
    async selectItem() {
      await this.shopNowBtn.click();
    }

    async myAccountMenu(){
      await this.page.hover('#myaccount .btn .user-text');
      await this.page.locator("[href='/my-pets']").click();
    }
  }
  
  module.exports = { HomePage };