import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import {ROUTES} from '@tests/const/routes';
import * as loginPage from '@tests/pages/login.page';
import * as customerpage from '@tests/pages/customer.page';
import * as assert from '@helpers/asserts';
import { nameHarryPotter } from '../pages/login.page';

describe('Login Test', function(){
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

it('As customer, I want to login successfully', () => {
    element.click(loginPage.customerLoginBtn);
    element.select(loginPage.yournameDropdownList, loginPage.nameHarryPotter)
    // element.select(loginPage.nameHarryPotter);
    element.click(loginPage.loginBtn);

    assert.shouldBeVisible(customerpage.welcomeHarryPotter);

    });
});
