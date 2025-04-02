import { faker } from '@faker-js/faker'

const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'
const INPUT_EMAIL_CRIAR = '#email_create'
const BTN_CRIAR = '#SubmitCreate'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type('academia2025_cypress@teste.com')
    cy.get(INPUT_SENHA).type('QA2025')
    cy.wait(2000)
    cy.get(BTN_LOGIN).click()
})

Cypress.Commands.add('preencherEmail', () => {
    cy.get(INPUT_EMAIL_CRIAR).type(faker.internet.email())
})

Cypress.Commands.add('criarConta', () => {
    cy.get(BTN_CRIAR).click()
})