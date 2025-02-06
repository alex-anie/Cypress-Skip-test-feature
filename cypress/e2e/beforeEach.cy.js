describe('Before each blocks of code, check for the specified operating system', () => {
    beforeEach(() => {
        cy.onlyOn('windows').onlyOn('firefox')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      });

    it('Skipped test: clicked on the Mac Book Air card', () => {
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it('Locate and interact with the specified card element on the web page', () => {
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Skipped test: clicked on the Apple Cinema card', () => {
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })
