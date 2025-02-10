describe('Skip command in cypress', () => {
  it.skip('Skipped test: clicked on the Mac Book Air card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-44-212408').click()
  })

  it('Locate and interact with the specified card element on the web page', () => {
    cy.getHtcElement()
})

  it.skip('Skipped test: clicked on the Apple Cinema card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-42-212408').click()
  })
})