// Perform skip test on chrome
// run test only on windows
describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
        cy.onlyOn('windows')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
        cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(2) > a').should('be.visible').click()
        cy.get('#input-firstname').type('Alex')
        cy.get('#input-lastname').type('Anie')
        cy.get('#input-email').type('ocxigin@gmail.com')
        cy.get('#input-telephone').type('090-222-222-1222-00')
        cy.get('#input-password').type('mypassword')
        cy.get('#input-confirm').type('mypassword')
        cy.get('#input-newsletter-yes').check({ force: true })
        cy.get('#input-agree').check({ force: true })
        cy.get('#content > form > div > div > input').click()
    })
  })