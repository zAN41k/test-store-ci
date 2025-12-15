import  user  from '../fixtures/authUser.json'
import { faker } from '@faker-js/faker';
import { login } from '../support/helper';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import accountPage from '../support/pages/AccountPage';
import loginPageAlternative from '../support/pages/LoginPageAlternative';

describe('Registrartion test suite with valid data', () => {
  beforeEach(() => {
    homePage.visit();
    homePage.clickLoginOrRegistrationButton();

  })
 it('Auth with valid data', () => {
    loginPage.fillLoginForm(user.loginName, user.password);
    loginPage.clickLoginButton();
    accountPage.getFirstNametext().should('contain', user.firstName);
  })
})

describe('Registrartion test suite with no valid data', () => {
  beforeEach(() => {
    homePage.visit();
    homePage.clickLoginOrRegistrationButton();
  })

  afterEach(()=> {
    loginPage.clickLoginButton();
    loginPage.getErrormessageText().should('contain','Error: Incorrect login or password provided.');

  })
   it('Auth with incorrect login', () => {
    user.loginName = faker.internet.username();
    loginPage.fillLoginForm(user.loginName, user.password);
  })

    it('Auth with empty login', () => {
    loginPage.fillLoginForm('', user.password);
  })
    it('Auth with incorrect password', () => {
    user.password = faker.internet.username();
    loginPage.fillLoginForm(user.loginName, user.password);
  })
    it('Auth with empty password', () => {
    loginPage.fillLoginForm(user.loginName, '');
  })

    it('Auth with empty password', () => {
    loginPageAlternative.getPasswordInputField().type(user.loginName);
    loginPageAlternative.getLoginButton().click();
    loginPageAlternative.getErrormessageText().should('contain','Error: Incorrect login or password provided.');
  })
})
