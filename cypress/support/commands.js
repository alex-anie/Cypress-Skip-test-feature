// HTC Touch HD
   Cypress.Commands.add('getHtcElement', ()=>{
        // Visit the initial page
       cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
     
       // Click on the pagination next button or specific element
       cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
     
       // After the page loads, target the desired element (image card) on the new page and click
       cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
})

// Register a user
Cypress.Commands.add('register', ()=>{
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
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
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
    cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a').should('be.visible').click()
    cy.get('#input-email').type('ocxigin@gmail.com')
    cy.get('#input-password').type('mypassword')
    cy.get('#content > div > div:nth-child(2) > div > div > form > input').click()
})