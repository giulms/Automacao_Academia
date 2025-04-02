import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal My Shop', () => {
    cy.visit('/')
})

And('acesso a página de autenticação', () => {
    cy.acessarLogin()
})

And('preencho o campo de email com um email válido', () => {
    cy.preencherEmail()
})

And('clico no botão "Create an account"', () => {
    cy.criarConta()
})

When('preencho os campos obrigatórios do formulário com informações válidas', () => {
    cy.realizarRegistro()
})

Then('valido o acesso a Home', () => {
    cy.validarLogin()
})