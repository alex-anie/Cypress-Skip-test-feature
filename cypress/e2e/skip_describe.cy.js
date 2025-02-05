describe.skip('Skip command in cypress', () => {
    it('Skipped test: clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it('Locate and interact with the specified card element on the web page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Skipped test: clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })

  describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
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

  // describe('Interact with the Login form', ('')=>{
  //   it('', ()=>{

  //   })
  // })