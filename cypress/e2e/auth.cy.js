import  user  from '../fixtures/authUser.json'
import { faker } from '@faker-js/faker';
import { login } from '../support/helper';


describe('Registrartion test suite with valid data', () => {

 it('Auth with valid data', () => {
    login(user.loginName, user.password);
    cy.get('.subtext').should('contain', user.firstName);
  })
})
describe('Registrartion test suite with no valid data', () => {
  beforeEach(() => {
    cy.log('Open home page');
    cy.visit('/');
    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

  })

  afterEach(()=> {
    cy.get('[title="Login"]').click();

    cy.get('.alert.alert-error.alert-danger').should('contain','Error: Incorrect login or password provided.');

  })
   it('Auth with incorrect login', () => {
    user.loginName = faker.internet.username();
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
  })

    it('Auth with empty login', () => {
    cy.get('#loginFrm_password').type(user.password);
  })


    it('Auth with incorrect password', () => {
    user.password = faker.internet.username();
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);

  })

    it('Auth with empty password', () => {
    cy.get('#loginFrm_loginname').type(user.loginName);
  })

  /*
     cy.log('Open home page ');
    cy.visit('/');
    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.get('#loginFrm_loginname').type(loginName);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();

  example of how will be or PageObject
  it('How to will be our test look with Page Object', () => {

    homePage.visit();
    homePage.openLoginPage();

    loginPage.fillLoginForm(user.loginName, user.password);
    loginPage.submitLoginForm();
    loginPage.verifySuccessLoginUser(user.firstName);
  })
 */
})
