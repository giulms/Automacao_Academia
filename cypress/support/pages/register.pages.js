import { faker } from '@faker-js/faker';

const GENERO_MASCULINO = '#id_gender1'
const GENERO_FEMININO = '#id_gender2'
const PRIMEIRO_NOME = '#customer_firstname'
const ULTIMO_NOME = '#customer_lastname'
const SENHA = '#passwd'
const DIA_NASCIMENTO = '#days'
const MES_NASCIMENTO = '#months'
const ANO_NASCIMENTO = '#years'
const BTN_REGISTRAR = '#submitAccount'
const BTN_NOTICIAS = '#newsletter'


Cypress.Commands.add('realizarRegistro', () => {
    let genero = faker.number.int({ min: 0, max: 1 })
    let noticias = faker.number.int({ min: 0, max: 1 })

    if (genero === 0){
        cy.get(GENERO_MASCULINO).click()
    }else{cy.get(GENERO_FEMININO).click()}
    cy.get(PRIMEIRO_NOME).type(faker.name.firstName())
    cy.get(ULTIMO_NOME).type(faker.name.lastName())
    cy.get(SENHA).type(faker.internet.password())
    cy.get(DIA_NASCIMENTO).select(faker.number.int({ min: 1, max: 31 }).toString())
    cy.get(MES_NASCIMENTO).select(faker.date.month())
    cy.get(ANO_NASCIMENTO).select(faker.number.int({ min: 1900, max: 2025 }).toString())
    if (noticias === 0){cy.get(BTN_NOTICIAS).click()}
    cy.get(BTN_REGISTRAR).click()
})