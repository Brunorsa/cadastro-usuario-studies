/// <reference types="Cypress" />

describe('Cadastrar Usuários', () => {
  context('Dado que visito a página de cadastro', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    context('Qunado insiro nome e email e clico em "Salvar"', () => {
      it('Então vejo uma lista com o nome e email cadastrados', () => {
        cy.cadastrarUsuario();
        cy.get('#resultadoNome').should('have.text', 'Teste');
        cy.get('#resultadoEmail').should('have.text', 'teste@gmail.com');
      });
    });
  });
});