/// <reference types="Cypress" /> 

describe('Question Web 2', () => {
  it('User see no rows found', () => {
    cy.visit('https://demoqa.com/books')

    // assert page
    cy.get(".main-header").should('have.text','Book Store')

    // search book
    cy.get('#searchBox').type('qa engineer')
    cy.get('.rt-noData').should('have.text','No rows found')
  })
})