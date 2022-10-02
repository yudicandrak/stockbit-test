import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

Given('User go to url select menu', function() {
    cy.visit('https://demoqa.com/select-menu')
})

When('User in select menu page', function() {
    // assert select menu 
    cy.get(".main-header").should('have.text','Select Menu')
})

And('User choose select value Another root option', () => 
{
    // assert select option
    cy.contains("Select Option").click()
    cy.get('#react-select-2-option-3').should('have.text','Another root option')
    cy.get('#react-select-2-option-3').click()
})

And('User choose select one Other', () => 
{
    // assert select title
    cy.contains("Select Title").click()
    cy.get('#react-select-3-option-0-5').should('have.text','Other')
    cy.get('#react-select-3-option-0-5').click()
})

And('User choose old style select menu Aqua', () => 
{
    // assert old select menu
    cy.get('#oldSelectMenu').select("Aqua")
})

And('User choose multi select drop down all color', function() 
{
    // assert multi select
    cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click()
    cy.get('#react-select-4-option-0').click()
    cy.get(':nth-child(5) > .col-md-6').click({force: true})
    cy.get('.css-1wy0on6 > :nth-child(3)').click()
    cy.get('#react-select-4-option-1').click()
    cy.get(':nth-child(5) > .col-md-6').click({force: true})
    cy.get('.css-1wy0on6 > :nth-child(3)').click()
    cy.get('#react-select-4-option-2').click()
    cy.get(':nth-child(5) > .col-md-6').click({force: true})
    cy.get('.css-1wy0on6 > :nth-child(3)').click()
    cy.get('#react-select-4-option-3').click()
    cy.get(':nth-child(5) > .col-md-6').click({force: true})   
})

Then('User success input all select menu', () => 
{
    cy.log('All input select menu already filled')
})