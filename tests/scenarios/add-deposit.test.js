import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as customerpage from '@tests/pages/customer.page';
import * as assert from '@helpers/asserts';
import { nameHarryPotter } from '../pages/login.page';
import * as customer from '@tests/data/customer.data'


describe('Add deposit', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it.only('As customer, I want to add deposit successfully', () => {
    element.click(loginPage.customerLoginBtn);
    element.select(loginPage.yournameDropdownList, loginPage.nameHarryPotter);
    element.click(loginPage.loginBtn);

    element.click(customerpage.depositTab);
    element.fillField(customerpage.amountField, customer.VALID_DEPOSIT.depositAmount);
    element.click(customerpage.depositBtn);

    assert.shouldBeVisible(customerpage.welcomeHarryPotter);
    assert.shouldBeVisible(customerpage.depositSuccessfullMsg);


    });
});
