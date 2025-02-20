describe('skip the last test after running the first two tests', () => {

  it('click the register button and fill in the input tag and click continue', () => {
    // Register custom commands : it registers a user to the LambdaTest playground platform
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    cy.register();
  });

  it('Open the specified URL, navigate to the third blog, and click on the link', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
    cy.blog();
  });

  it.skip('visit the web address and scroll into view', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=36');
    cy.get('#entry_210911 > h4').scrollIntoView();
  });

  afterEach(() => {
    // Code inside this block will run after each test in the block.
    cy.log('Test case completed');
  });

});
