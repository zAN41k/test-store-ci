import  user  from '../fixtures/user.json'
import  userNotValid  from '../fixtures/userNotVaild.json'
import { faker } from '@faker-js/faker';

describe('Registrartion test suite ', () => {

it('Registration with valid data', () => {

user.email = faker.internet.email();
user.loginName = faker.internet.username();

    cy.log('Open home page ');
    cy.visit('/');
    console.log(JSON.stringify(user));
    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.log('Open account create page');
    cy.get('[title="Continue"]').click();

    cy.log('Fill in the form');
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);

    cy.get('#AccountFrm_telephone').type(user.telephone);
    cy.get('#AccountFrm_fax').type(user.fax);

    cy.get('#AccountFrm_company').type(user.company);
    cy.get('#AccountFrm_address_1').type(user.address1);
    cy.get('#AccountFrm_address_2').type(user.address2);
    cy.get('#AccountFrm_postcode').type(user.postalcode);
    cy.get('#AccountFrm_country_id').select(user.country);
    cy.get('#AccountFrm_zone_id').select(user.city);
    cy.get('#AccountFrm_city').type(user.zone);


    cy.log('Login details');
    cy.get('#AccountFrm_loginname').type(user.loginName);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);

    cy.log('Newsletter');

    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('[title="Continue"]').click();

    cy.log('Verify registration');
    cy.get('.maintext').should('contain', ' Your Account Has Been Created!');
    cy.get('[title="Continue"]').click();
    cy.get('.subtext').should('contain', user.firstName);


  })

  it('Auth with valid data', () => {
    cy.log('Open home page ');
    cy.visit('/');

    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('.subtext').should('contain', user.firstName);


  })

  it.skip('Example of visibility and how to use fixtures with different data', () => {
    cy.log('Open home page ');
    cy.visit('/');

    console.log(userNotValid.email);
    console.log(userNotValid.loginName);
    userNotValid.email = faker.internet.email();
    userNotValid.loginName = faker.internet.username();
    console.log(userNotValid.email);
    console.log(userNotValid.loginName);

  })

})
