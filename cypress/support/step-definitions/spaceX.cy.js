import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
 
Given('realizo um requisição para API SpaceX', () => {
    cy.requisicaoSpaceX()
})

Then('valido a response da API SpaceX', () => {
    cy.validarRequisicaoSpaceX()
})