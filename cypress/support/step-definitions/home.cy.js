import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('clico na categoria women', () => {
    cy.clickBtnWomen()
})