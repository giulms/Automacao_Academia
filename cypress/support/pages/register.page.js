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
const INPUT_EMAIL_CRIAR = '#email_create'
const DADO_EMAIL = faker.internet.email()
const BTN_CRIAR = '#SubmitCreate'
const DADO_PRIMEIRO_NOME = faker.name.firstName()
const DADO_ULTIMO_NOME = faker.name.lastName()
const DADO_SENHA = faker.internet.password()
const DADO_DIA_NASCIMENTO = faker.number.int({ min: 1, max: 31 }).toString()
const DADO_MES_NASCIMENTO = faker.date.month()
const DADO_ANO_NASCIMENTO = faker.number.int({ min: 1900, max: 2025 }).toString()

Cypress.Commands.add('preencherEmail', () => {
    cy.get(INPUT_EMAIL_CRIAR).type(DADO_EMAIL)
})

Cypress.Commands.add('criarConta', () => {
    cy.get(BTN_CRIAR).click()
})

Cypress.Commands.add('realizarRegistro', () => {
    let genero = faker.number.int({ min: 0, max: 1 })
    let noticias = faker.number.int({ min: 0, max: 1 })

    if (genero === 0){
        cy.get(GENERO_MASCULINO).click()
    }else{cy.get(GENERO_FEMININO).click()}
    cy.get(PRIMEIRO_NOME).type(DADO_PRIMEIRO_NOME)
    cy.get(ULTIMO_NOME).type(DADO_ULTIMO_NOME)
    cy.get(SENHA).type(DADO_SENHA)
    cy.get(DIA_NASCIMENTO).select(DADO_DIA_NASCIMENTO)
    cy.get(MES_NASCIMENTO).select(DADO_MES_NASCIMENTO)
    cy.get(ANO_NASCIMENTO).select(DADO_ANO_NASCIMENTO)
    if (noticias === 0){cy.get(BTN_NOTICIAS).click()}
    cy.get(BTN_REGISTRAR).click()
})