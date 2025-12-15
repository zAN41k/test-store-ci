class AccountPage {

    constructor() {
       this.firstNametext = '.subtext';
    }


    visit() {
        cy.log('Open account page');
        cy.visit('/index.php?rt=account/account');

    }

    getFirstNametext () {
        return cy.get(this.firstNametext);
    }

}

export default new AccountPage();
