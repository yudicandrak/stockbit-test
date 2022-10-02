/// <reference types="Cypress" /> 

describe('Question Web 1', () => {
  it('User success input all select menu', () => {
    cy.visit('https://demoqa.com/select-menu')

    // assert select menu 
    cy.get(".main-header").should('have.text','Select Menu')

    // assert select option
    cy.contains("Select Option").click()
    cy.get('#react-select-2-option-3').should('have.text','Another root option')
    cy.get('#react-select-2-option-3').click()
    
    // assert select title
    cy.contains("Select Title").click()
    cy.get('#react-select-3-option-0-5').should('have.text','Other')
    cy.get('#react-select-3-option-0-5').click()

    // assert old select menu
    cy.get('#oldSelectMenu').select("Aqua")

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
})