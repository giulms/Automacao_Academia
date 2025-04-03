import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('valido a quantidade de produtos', () => {
    cy.validarQntProdutos()
})

And('acesso o produto {string}', (produto) => {
    cy.clicarProduto(produto)
})

Then('valido o produto {string}', (produto) => {
    cy.validarProduto(produto)
})