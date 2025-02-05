// Perform skip test on chrome 
// Run test on only chrome browser
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.onlyOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#input-name').type('Alex Anie')
        cy.get('#input-email').type('ocxigin@gmail.com')
        cy.get('#input-comment').type('This is a great content. Thanks for sharing')
        cy.get('#button-comment').click()
    });
})