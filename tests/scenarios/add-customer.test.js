import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import loginPage from '@tests/pages/login.page';
import * as managerPage from '@tests/pages/manager.page';
import manager from '@tests/data/manager.data';
import * as assert from '@helpers/asserts';
import { nameHarryPotter } from '../pages/login.page';

describe('Add customer', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('As manager, I want to add customer successfully', () => {
    element.click(loginPage.managerLoginBtn);
    element.click(managerPage.addCustomerTab);
    element.fillField(managerPage.fnameField, manager.VALID_ADD_CUST.fname);
    element.fillField(managerPage.lnameField, manager.VALID_ADD_CUST.lname);
    element.fillField(managerPage.postCodeField, manager.VALID_ADD_CUST.pcode);
    element.click(managerPage.addCustomerBtn);

    assert.shouldBeVisible(managerPage.addCustSucMsg);

    });
});