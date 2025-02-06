describe('Test based on URL protocol', () => {
    it('Run the test only if the protocol is HTTPS', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

      cy.location('protocol').then((protocol) => {
        cy.onlyOn(protocol === 'https:');
      });

      // Example test logic
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover');
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a')
        .should('be.visible')
        .click();
      cy.get('#input-email').type('ocxigin@gmail.com');
      cy.get('#input-password').type('mypassword');
      cy.get('#content > div > div:nth-child(2) > div > div > form > input').click();
    });
  });
  