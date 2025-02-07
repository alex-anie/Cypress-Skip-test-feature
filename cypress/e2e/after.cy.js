describe('Verify the Operating system after running', ()=>{
    
    after(() => {
        cy.onlyOn('mac').onlyOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=36')
        cy.get('#entry_210911 > h4').scrollIntoView()
    });

    it('click the register button and fill in the input tag and click continue', ()=>{
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

    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });
  })
