describe.only('Test based on URL pathname', () => {
    it('Run code on windows and firefox', () => {
      // Example test logic
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a')
        .should('be.visible')
        .click()
      cy.get('#input-email').should('have.attr', 'type', 'text').type('ocxigin@gmail.com')
      cy.get('#input-password').should('have.attr', 'type', 'password').type('mypassword')
      cy.get('#content > div > div:nth-child(2) > div > div > form > input').should('have.attr', 'type', 'submit').click()
    })

    it.skip('click the register button and fill in the input tag and click continue', ()=>{
      // Register custom commands : it register a user to the LambdaTest playground platform
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.register()
  })

})