describe('Verify the url before running', () => {
    
  before(() => {
      // Check if the URL is valid
      const url = 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6';
      try {
          new URL(url); // Will throw an error if the URL is not valid
      } catch (e) {
          // Skip the test if URL is invalid
          cy.log('Invalid URL, skipping the test');
          this.skip();
      }
  });

  it('click the register button and fill in the input tag and click continue', () => {
    // Register custom commands : it registers a user to the LambdaTest playground platform
     cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.register();
  });

  it('Open the specified URL and navigate to the third blog and then click on the link', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
    cy.blog()
  });
});
