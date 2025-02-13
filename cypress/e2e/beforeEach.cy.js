describe('Verify the url host before running', () => {

  beforeEach(function () {
      // Define the URL for each test case
      const url = 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6';
      
      // Extract the host part of the URL
      const requiredHost = 'https://ecommerce-playground.lambdatest.io';
      const parsedUrl = new URL(url);
      const currentHost = `${parsedUrl.protocol}//${parsedUrl.host}`;

      cy.log(parsedUrl.host)

      // Check if the host matches
      if (currentHost !== requiredHost) {
          cy.log('Host does not match the required one, skipping the test');
          this.skip(); // Skip the test if the host doesn't match
      }
  });

  it('click the register button and fill in the input tag and click continue', () => {
      // Register custom commands: it registers a user to the LambdaTest playground platform
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
      cy.register();
  });

  it('Open the specified URL and navigate to the third blog and then click on the link', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
    cy.blog()
  });
});
