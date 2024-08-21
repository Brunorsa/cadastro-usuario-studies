/// <reference types="cypress" />

Cypress.Commands.add('cadastrarUsuario', (nome, email) => {
  cy.get('[data-test="name_field"]').type(nome);
  cy.get('[data-test="email_field"]').type(email);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add('verifyListaUser', () => {
  cy.get('.results-button').click();
  cy.get('[data-test="user-n-found"]').should('have.text', 'Nenhum usuário cadastrado.');
})

Cypress.Commands.add('modalDelete', () => {
  cy.get('[data-test="btn_delete"]').click()
  cy.get('.confirm-button').click();
})

Cypress.Commands.add('modalEdit', (editName, editEmail) =>{
  cy.get('[data-test="btn_edit"]').click();
  cy.get('h2').should('have.text', 'Editar Usuário');
  cy.get('#editName').clear().type(editName)
  cy.get('#editName').clear().type(editEmail)
  cy.get('.confirm-button').click();
})