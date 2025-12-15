Cypress.Commands.add('login', (loginName, password) => {
    cy.log('Open home page ');
    cy.visit('/');
    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.get('#loginFrm_loginname').type(loginName);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();
})
