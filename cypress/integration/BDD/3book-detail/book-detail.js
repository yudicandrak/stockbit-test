import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps";

let title;
let author;
let publisher;
Given('User go to url book', function() {
    cy.visit('https://demoqa.com/books')
})

When('User in Book Store page', function() {
    // assert select menu 
    cy.get(".main-header").should('have.text','Book Store')
})

And('User search book Git Pocket Guide', () => 
{
    // search book
    cy.get('#searchBox').type('Git Pocket Guide')
})

And('User click book Git Pocket Guide', () => 
{
// title
cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').each(($e1, index, $list) => {
    if(index === 0){
      title = $e1.text()
    }    
  }).then(function(){      

    // name
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(3)').each(($e1, index, $list) => {
      if(index === 0){
        author = $e1.text()
      }    
    }).then(function(){

      // author
      cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').each(($e1, index, $list) => {
        if(index === 0){
          publisher = $e1.text()
        }    
      }).then(function(){

        // click book
        cy.get(".action-buttons").find('a').click()
        
        Then('User see Git Pocket Guide', () => 
        {
            // assert title
            cy.get('#title-wrapper > .col-md-9 > #userName-value').should('have.text', title.trim())
            // assert author
            cy.get('#author-wrapper > .col-md-9 > #userName-value').should('have.text', author.trim())
            // assert name
            cy.get('#publisher-wrapper > .col-md-9 > #userName-value').should('have.text', publisher.trim())
        })

        
      })
    })
  })
})

