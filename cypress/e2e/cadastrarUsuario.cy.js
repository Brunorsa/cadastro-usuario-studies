/// <reference types="cypress" />

const faker = require('faker-br');

var fakeName = faker.name.firstName();
var fakeEmail = faker.internet.email();

describe('Cadastrar Usuários', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('verify if user list is empty', () => {
    cy.verifyListaUser();
  });
  it('register a new user', () => {
    cy.cadastrarUsuario(fakeName, fakeEmail);
    cy.get('[data-test="name_field"]').should('have.text', `Nome: ${fakeName}`);
    cy.get('[data-test="email_field"]').should('have.text', `Email: ${fakeEmail}`);
    cy.get('[data-test="btn_edit"]').should('be.visible');
    cy.get('[data-test="btn_delete"]').should('be.visible');
  });
  it('edit a user', () => {
    cy.cadastrarUsuario(fakeName, fakeEmail);
    cy.modalEdit(faker.name.firstName(), faker.internet.email());
  });
  it('delet a user', () => {
    cy.cadastrarUsuario(fakeName, fakeEmail);
    cy.modalDelete();
    cy.get('[data-test="user-n-found"]').should('have.text', 'Nenhum usuário cadastrado.');
  });
});