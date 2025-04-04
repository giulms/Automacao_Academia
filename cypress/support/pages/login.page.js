const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('username'), {log: false})
    cy.get(INPUT_SENHA).type(Cypress.env('password'), {log: false})
    cy.wait(2000)
    cy.get(BTN_LOGIN).click()
})
