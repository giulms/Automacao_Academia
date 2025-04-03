import { faker } from '@faker-js/faker'

const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type('academia2025_cypress@teste.com')
    cy.get(INPUT_SENHA).type('QA2025')
    cy.wait(2000)
    cy.get(BTN_LOGIN).click()
})
