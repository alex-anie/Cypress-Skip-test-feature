describe('Skip command in cypress', () => {
    it('First Test: clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it.only('Second Test: Locate and interact with the specified card element on the web page', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
        cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
        cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Third Test: clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })