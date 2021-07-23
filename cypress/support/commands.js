/// <reference types="Cypress" />

Cypress.Commands.add('cadastrarUsuario', () => {
    cy.get('#nomeid').type('Teste');
    cy.get('#emailid').type('teste@gmail.com');
    cy.get('.enviar').click();
});