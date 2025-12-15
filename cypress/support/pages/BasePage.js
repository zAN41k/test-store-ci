export default class BasePage {
    constructor() {
      this.loginOrRegistrationButton = '#customer_menu_top';
    }
     getLoginOrRegistrationButton() {
      return cy.get(this.loginOrRegistrationButton);

     }

    clickLoginOrRegistrationButton() {
    cy.log('Open account/login page');
    this.getLoginOrRegistrationButton().click();
     }
}
