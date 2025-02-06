//Skip chrome browser
// only load it test case on a mac and firefox
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.skipOn('chrome')
        cy.onlyOn("mac").onlyOn('firefox')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });
})

// skip firefox browser
// load only on windows and chrome
describe('Interact with the Login form', ()=>{
    it('Provide users email and password and login', ()=>{
        cy.skipOn('firefox')
        cy.onlyOn("windows").onlyOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
        cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
        cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a').should('be.visible').click()
        cy.get('#input-email').type('ocxigin@gmail.com')
        cy.get('#input-password').type('mypassword')
        cy.get('#content > div > div:nth-child(2) > div > div > form > input').click()
    })
})