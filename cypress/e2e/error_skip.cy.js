import { skipIfPreviousTestsFailed } from "cypress-skip-this-test";

describe('Test with error handling and Cypress Skip Test', () => {
  
    beforeEach(skipIfPreviousTestsFailed)
  
    it('Test only if page loads successfully', () => {
      // Skip the test if the page did not load successfully (e.g., 404 error)
  
      // If page loaded successfully, perform actions on the page
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });

    it('Fill in the names, email and drop a comment and then click on post button', ()=>{
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&path=6&article_id=31')
      cy.get('#input-name').should('be.visible').type('John Smith')
      cy.get('#input-email').should('have.attr', 'name', 'email').type('johnsmith@gmail.com')
      cy.get('#input-comment').should('have.attr', 'name', 'text').type('Thanks for writing this useful blog')
      cy.get('#button-comment').should('have.attr', 'type', 'button').click()
    })
  });
