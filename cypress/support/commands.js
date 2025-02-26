// Register a user
Cypress.Commands.add('register', ()=>{
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(2) > a').should('be.visible').click()
    cy.get('#input-firstname').type('Alex')
    cy.get('#input-lastname').type('Anie')
    cy.get('#input-email').type('ocxigin@gmail.com')
    cy.get('#input-telephone').type('090-222-222-1222-00')
    cy.get('#input-password').type('mypassword')
    cy.get('#input-confirm').type('mypassword')
    cy.get('#input-newsletter-yes').check({ force: true })
    cy.get('#input-agree').check({ force: true })
    cy.get('#content > form > div > div > input').click()
})

// Login a User
Cypress.Commands.add('login', ()=>{
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a').should('be.visible').click()
    cy.get('#input-email').type('ocxigin@gmail.com')
    cy.get('#input-password').type('mypassword')
    cy.get('#content > div > div:nth-child(2) > div > div > form > input').click()
})

Cypress.Commands.add('blog', ()=>{
    cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
    cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
    cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
})