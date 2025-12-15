import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor() {
        super();
        this.loginNameInputField = '#loginFrm_loginname';
        this.passwordInputField = '#loginFrm_password';
        this.loginButton = '[title="Login"]';
        this.errormessageText = '.alert.alert-error.alert-danger';
    }

    visit() {
        cy.log('Open login page')
        cy.visit('/index.php?rt=account/login');
    }

    getLoginNameInputField() {
        return cy.get(this.loginNameInputField);
    }

    getPasswordInputField() {
    return cy.get(this.passwordInputField);
    }

    getLoginButton() {
        return cy.get(this.loginButton);

    }

    getErrormessageText () {
        return cy.get(this.errormessageText);
    }

    clickLoginButton () {
        this.getLoginButton().click();

    }

    fillLoginForm (loginName, password) {
        cy.log('Fill login form');

        loginName ? this.getLoginNameInputField().type(loginName) : cy.log('Keep loginName input field empty');
        password ? this.getPasswordInputField().type(password) : cy.log('Keep password input field empty');
    }
}

export default new LoginPage();
