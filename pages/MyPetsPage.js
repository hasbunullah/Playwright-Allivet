class MyPetsPage {

    constructor(page) {
        this.page = page;
        this.addPetbtn = page.locator('//img[@alt="add pet"]')
        this.petName = page.locator('#name') 
        this.petType = page.locator('#pet-type')
        this.petTypeValue = page.getByLabel('Pet type *')
        this.petWeight = page.locator('#weight')
        this.petBirthDay = page.locator('#birthday')
        this.petAge = page.locator('#pet-age')
        this.petAgeValue = page.getByLabel('Age *')
        this.saveBtn = page.locator('.btn-save')
        this.threeDots = page.locator('(//a[@role="button"])[283]')
        this.deleteButton = page.getByLabel('label.deletepet').first();
        this.deleteButtonPopup = page.locator('.delete-confirmation-btn');
    }

    async addPet(){
        await this.addPetbtn.click();
        await this.petName.fill('Jack');
        await this.petType.click();
        await this.petTypeValue.selectOption('Dog');
        await this.petWeight.fill('20');
        await this.petBirthDay.fill('12/12/2021');
        await this.petAge.click();
        await this.petAgeValue.selectOption('2-3 years');
        await this.saveBtn.click();
        }

    async removePet(){
        
        await this.threeDots.click();
        await this.deleteButton.click();
        await this.deleteButtonPopup.click();
    }

}
module.exports = { MyPetsPage };