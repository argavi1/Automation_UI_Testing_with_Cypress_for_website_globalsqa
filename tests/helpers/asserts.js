export function shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
}

export function shouldContainText(selector, value){
    cy.get(selector).should('contain.text', value)
}

export function shouldContain(selector, ...args){
    cy.get(selector).should('contain', ...args)
}