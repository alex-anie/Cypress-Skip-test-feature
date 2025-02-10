describe('Verify the Operating system after running', ()=>{
    
    after(() => {
        cy.onlyOn('mac').onlyOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/article&article_id=36')
        cy.get('#entry_210911 > h4').scrollIntoView()
    });

    it('click the register button and fill in the input tag and click continue', ()=>{
     // Register custom commands : it register a user to the LambdaTest playground platform
        cy.register()
    })

    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });
  })
