import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as customerpage from '@tests/pages/customer.page';
import * as assert from '@helpers/asserts';
import { nameHarryPotter } from '../pages/login.page';
import * as customer from '@tests/data/customer.data'


describe('Deposit', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('As customer, I want to deposit successfully', () => {
    element.click(loginPage.customerLoginBtn);
    element.select(loginPage.yournameDropdownList, loginPage.nameHarryPotter);
    element.click(loginPage.loginBtn);

    element.click(customerpage.depositTab);
    element.fillField(customerpage.depositAmountField, customer.VALID_DEPOSIT.depositAmount);
    element.click(customerpage.depositBtn);

    assert.shouldBeVisible(customerpage.welcomeHarryPotter);
    assert.shouldBeVisible(customerpage.depositSuccessfullMsg);

    });
});
