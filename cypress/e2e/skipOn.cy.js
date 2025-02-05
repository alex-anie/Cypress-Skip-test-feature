// Perform skip test on chrome
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.skipOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
    });
})