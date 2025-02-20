describe('Skip command in cypress', () => {
  it.skip('Skipped test: clicked on the Mac Book Air card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-44-212408').click()
  })

  it('Locate and interact with the specified card element on the web page', () => {
    // HTC Touch HD
    // Visit the initial page
   cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
   // Click on the pagination next button or specific element
   cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
   // After the page loads, target the desired element (image card) on the new page and click
   cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
})

  it.skip('Skipped test: clicked on the Apple Cinema card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-42-212408').click()
  })
})