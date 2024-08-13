Cypress.Commands.add('cadastrarUsuario', () => {
    cy.get('[data-test="campoNome"]').type('Teste');
    cy.get('[data-test="campoEmail"]').type('teste@gmail.com');
    cy.get('button').click();
});