// Perform skip test on chrome 
// Run test on only chrome browser
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.onlyOn('chrome')
         // A custom commands : it login a user on the LambdaTest 
         cy.login()
    });
})