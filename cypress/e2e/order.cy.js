import user from '../fixtures/authUser.json'
import { login , findProductWithRecursion , findNewProd } from '../support/helper';

beforeEach(() =>{
 //cy.login(user.loginName, user.password); // used cypress.commands added new command for login
 login(user.loginName, user.password); // created a export function in helper.js and imported to file! Now we can use cmd+click
})

it('Place order from main page', () => {

    cy.log('Back to main to main page');
    cy.visit('/');

    cy.get('.prdocutname').first().click();
    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.maintext').should('have.text' , ' Your Order Has Been Processed!')

})

it.only('Place order using helper function to find a product by name', () => {
    cy.visit('/');
    //findProductWithRecursion('Nail Lacquer');
    findNewProd('Nail Lacquer');
})
