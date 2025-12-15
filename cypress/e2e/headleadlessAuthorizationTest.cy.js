import  user  from '../fixtures/authUser.json';
import { headlessAuthorization } from '../support/helper';
import accountPage from '../support/pages/AccountPage';

 it('Dummy test to verify auth helper' , () => {
    headlessAuthorization(user.loginName, user.password);

    accountPage.visit();
    accountPage.getFirstNametext().should('have.text' , user.firstName);
 })
