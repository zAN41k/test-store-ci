const user = {
  firstName: 'John Doe',
  lastName: 'John last Name',
  email : 'email214@email.ua', // unique
  telephone : '+1234567890',
  fax: '+1234567890',
  company : 'John Company',
  address1: 'John Address 1',
  address2: 'John Address 2',
  city : 'Kyiv', // value="3490"
  zone: 'Kyiv',
  postalcode: '02022',
  country: 'Ukraine', // value="220"
  loginName: 'JohnLogin4', // unique
  password: 'JohnStrongPass'
}


it('Registration with valid data', () => {
    cy.log('Open home page ');
    cy.visit('/');

    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.log('Open account create page');
    cy.get('[title="Continue"]').click();

    cy.log('Fill in the form');
    cy.get('#AccountFrm_firstname').type(user.firstName); //First Name:
    cy.get('#AccountFrm_lastname').type(user.lastName); //Last Name:
    cy.get('#AccountFrm_email').type(user.email); //Email :

    cy.get('#AccountFrm_telephone').type(user.telephone); //Phone :
    cy.get('#AccountFrm_fax').type(user.fax); //Fax :

    cy.get('#AccountFrm_company').type(user.company); //Company :
    cy.get('#AccountFrm_address_1').type(user.address1); //Address 1  :
    cy.get('#AccountFrm_address_2').type(user.address2); //Address 2  :
    cy.get('#AccountFrm_postcode').type(user.postalcode); //ZipCode :
    cy.get('#AccountFrm_country_id').select(user.country); //Country :
    cy.get('#AccountFrm_zone_id').select(user.city); //Region / State :
    cy.get('#AccountFrm_city').type(user.zone);


    cy.log('Login details');
    cy.get('#AccountFrm_loginname').type(user.loginName); //Login Name :
    cy.get('#AccountFrm_password').type(user.password); //Password :
    cy.get('#AccountFrm_confirm').type(user.password); //Confirm Password :

    cy.log('Newsletter');

    cy.get('#AccountFrm_newsletter0').check(); // Subscribe NO
    cy.get('#AccountFrm_agree').check(); //I have read Policy
    cy.get('[title="Continue"]').click(); // Continue

    cy.log('Verify registration');
    cy.get('.maintext').should('contain', ' Your Account Has Been Created!');
    cy.get('[title="Continue"]').click();
    cy.get('.subtext').should('contain', user.firstName);


  })
