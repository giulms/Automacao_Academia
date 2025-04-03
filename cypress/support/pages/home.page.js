const BTN_ACESSA_LOGIN = '.login'
const BTN_CONTA = '.account'
const BTN_WOMEN = 'a[title="Women"]'

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click()
})

Cypress.Commands.add('validarLogin', () => {
    cy.get(BTN_CONTA).should('be.visible')
})

Cypress.Commands.add('clickBtnWomen', () => {
    cy.get(BTN_WOMEN).click()
    cy.log("Botão clicado")
})