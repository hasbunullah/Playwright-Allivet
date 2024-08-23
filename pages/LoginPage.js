class LoginPage {
    constructor(page) {
      this.page = page;

    }
  
    async goto() {
      await this.page.goto('/signin');
      await this.page.waitForURL('**/signin');
    }
  
    async login(email, password) {
      await this.page.locator('#login-form-email').fill(email);
      await this.page.locator('#login-form-password').fill(password);
      await this.page.getByRole('button', { name: 'Login' }).click();
      
    }

    async createAccount(firstName, lastName, registerEmail){
      await this.page.locator('#registration-form-fname').fill(firstName);
      await this.page.locator('#registration-form-lname').fill(lastName);
      await this.page.locator('#registration-form-email').fill(registerEmail);
      await this.page.locator(".form-control-label[for='registration-form-password']").fill("Admin@123");
      await this.page.locator('#registration-form-password-confirm').fill("Admin@123");
      await this.page.locator('.registration-btn').click();

    }
  }
  
  module.exports = { LoginPage };