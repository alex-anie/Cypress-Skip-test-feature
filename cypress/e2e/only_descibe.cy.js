describe('Select and click the product card', () => {
    it('clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })

    it('Locate and interact with the specified card element on the web page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })

    it('clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })

  describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
         // Register custom commands : it register a user to the LambdaTest playground platform
         cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
         cy.register()
    })
  })

  describe.only('Interact with the Login form', ()=>{
    it('Provide users email and password and login', ()=>{
         // A custom commands : it login a user on the LambdaTest 
         cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
         cy.login()
    })
  })