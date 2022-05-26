
import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';


When(`preencho o campo Nome com {string}`, (nome) => {
    cy.get('#name').type(nome)
});
And(`preencho o campo E-mail com {string}`, (email) => {
	cy.get('[name=email]').type(email)
});
And(`preencho o campo Senha com {string}`, (senha) => {
	cy.get('[type=password]') .type(senha)
});
And(`clico no botão {string}`, (botao) => {
	cy.get('button').contains(botao).click()
});
Then(`devo visualizar a tabela com título {string} com as informações cadastradas`, (titulo) => {
	cy.contains(titulo).should('exist')
    cy.get('table').should('be.visible')
});
And(`deve aparecer na tabela o mesmo {string} e {string} cadastrados`, (nome, email) => {
	cy.contains(nome)
    cy.contains(email)
});

Then(`devo visualizar a mensagem de validação {string}`, (mensagem) => {
    cy.contains(mensagem).should('be.visible')
});

Then(`devo visualizar a mensagem de obrigatoriedade do {string}`, (campo) => {
    cy.contains(`O campo ${campo} é obrigatório.`).should('be.visible')
});
When('não preencho os campos da tela', () => {
    cy.get('#name').should('be.empty')
    cy.get('[name=email]').should('be.empty')
    cy.get('[type=password]').should('be.empty')
});
And(`clico no link {string}`, (link) => {
	cy.get('a').contains(link).click()
});
Then(`não deve existir a tabela com o título {string}`, (titulo) => {
    cy.contains(titulo).should('not.exist')  
})