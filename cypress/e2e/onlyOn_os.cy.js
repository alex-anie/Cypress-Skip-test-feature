// Perform skip test on chrome
// run test only on windows
describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
        cy.onlyOn('windows')
        // Register custom commands : it register a user to the LambdaTest playground platform
        cy.register()
    })
  })