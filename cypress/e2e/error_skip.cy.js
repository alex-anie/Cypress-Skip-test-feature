describe('Test with error handling and Cypress Skip Test', () => {
    let getStatusCode;
  
    before(() => {
      // Make a request to the page and capture the status code
      cy.request({
        url: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
        failOnStatusCode: false,  // Do not fail the test if the request fails
      }).then((response) => {
        getStatusCode = response.status;
        cy.log(`Page status code: ${getStatusCode}`);
      });
    });
  
    it('Test only if page loads successfully', () => {
      // Skip the test if the page did not load successfully (e.g., 404 error)
      cy.skipOn(getStatusCode !== 200);
  
      // If page loaded successfully, perform actions on the page
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });
  });
  