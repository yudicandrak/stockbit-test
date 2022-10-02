import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('User go to url books', function() {
    cy.visit('https://demoqa.com/books')
})

When('User in Book Store page', function() {
    // assert page
    cy.get(".main-header").should('have.text','Book Store')
})

And('User search book qa engineer', function() {
    // search book
    cy.get('#searchBox').type('qa engineer')
})

Then('User see No rows found', function() {
    // assert no rows
    cy.get('.rt-noData').should('have.text','No rows found')
})