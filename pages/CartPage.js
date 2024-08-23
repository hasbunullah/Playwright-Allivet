class CartPage {
    constructor(page) {
      this.page = page;
      this.addToCartBtn = page.locator('button.add-to-cart');
      this.checkOutBtn = page.locator('.row div.cart-checkout-btn-wrapper .checkout-btn');
      this.subtotalLoc=  page.locator('.row .totals .row .col-6 .sub-total')

    }
  
    async addItemToCart() {
      await this.addToCartBtn.click();
    }
  
    async proceedToCheckout() {
      await this.checkOutBtn.click();
    }

    async priceCheck(){
      const Subtotal = await this.subtotalLoc.textContent();
      let numericStr = Subtotal.replace('$', '');
      let priceFloat = parseFloat(numericStr);
      // console.log(priceFloat);

      const Shipping = await this.page.locator('.row .totals .row .col-6 .shipping-cost').textContent();
      let numericStr2 = Shipping.replace('$', '');
      let priceFloat2 = parseFloat(numericStr2);
      // console.log(priceFloat2);

      const Total = await this.page.locator('.row .totals .row .col-6 .grand-total').textContent();
      let numericStr3 = Total.replace('$', '');
      let priceFloat3 = parseFloat(numericStr3);
      // console.log(priceFloat3);
      let sum = priceFloat + priceFloat2 ;
      let addedValue = parseFloat(sum);
      return {addedValue, priceFloat3 };
    }
  }
  
  module.exports = { CartPage };
  