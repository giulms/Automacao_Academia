const DIV_PRODUTO = '.product-container'
const TITLE_PRODUTO = 'h1'

Cypress.Commands.add('validarQntProdutos', () => {
    cy.get(DIV_PRODUTO).should('have.length', 7)
    cy.log("Quantidade de produtos validada com sucesso")
})

Cypress.Commands.add('clicarProduto', produto => {
    cy.get(DIV_PRODUTO).contains(produto).click()
    cy.log("clicou no produto")
})

Cypress.Commands.add('validarProduto', produto => {
    cy.get(TITLE_PRODUTO).contains(produto)
    cy.log("Produto validado com sucesso")
})