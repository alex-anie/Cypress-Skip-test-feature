# TEXT-MARKDOWN

# Cypress Skip test

![cypress-test-command.png](/cypress/downloads/thumbnail.png)

# OUTLINE

## Introduction

- Brief Overview of Cypress skip testing
- importance of Cypress skip testing
- the aim and objectives of the blog (That is what the reader is suppose to learn after reading the blog)

## What is Cypress Skip test

- Definition
- Features

## When should I use Cypress skip test

- list reasons when cypress skip test should be used

## Uses of skip test in Cypress

### [Skipping a single test with skip() command](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/skip.cy.js)

```jsx
describe('Skip command in cypress', () => {
  it.skip('Skipped test: clicked on the Mac Book Air card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-44-212408').click()
  })

  it('Locate and interact with the specified card element on the web page', () => {
    cy.getHtcElement()
})

  it.skip('Skipped test: clicked on the Apple Cinema card', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
    cy.get('#mz-product-grid-image-42-212408').click()
  })
})
```

- **First Test (MacBook Air)** and **Third Test (Apple Cinema)**:
    - These tests use `it.skip()` to ensure they are **not** run during test execution. They are defined in the code but won't be executed for now. This is useful when you want to temporarily disable tests, either because they are incomplete, flaky, or irrelevant for the moment.
    - These skipped tests are meant to visit the e-commerce website, find a specific product card (MacBook Air or Apple Cinema), and simulate clicking on it.
- **Runnable Test (`it()`)**:
    - **Second Test (Locate and interact with the specified card element)**:
        - This test case is executed when the test suite runs. It navigates to a category page on the website, clicks on a pagination button (to go to the next page of products), and then targets and clicks on a specific product image card.
        - This test demonstrates how to interact with elements that appear on different pages (in this case, through pagination).
        - Cypress commands like `cy.get()` are used to select elements on the page, and `.click()` simulates the user's actions, such as clicking on a button or an image card.
        - To ensure that the test works as expected, the `cy.get()` command is followed by `.should('be.visible')`, which ensures that the element is visible before interacting with it.

### [Skip blocks with describe.skip](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/skip_describe.cy.js)

```jsx
describe.skip('Skip command in cypress', () => {
    it('Skipped test: clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it('Locate and interact with the specified card element on the web page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Skipped test: clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })

  describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
      // Register custom commands : it register a user to the LambdaTest playground platform
      cy.register()
    })
  })

```

First Test Suite (`describe.skip()`):

- **`describe.skip()`** is used, which means **all tests** inside this block will be skipped and **won't run** during test execution.
- The suite has three tests:
    - **Test 1**: Skips a test that visits an e-commerce product category page and clicks on the MacBook Air product card.
    - **Test 2**: Skips a test where the page is visited, pagination is used to move to the next page, and a specific product image card is clicked.
    - **Test 3**: Skips a test that clicks on the Apple Cinema product card after visiting the product category page.

2. Second Test Suite (`describe()`):

- This block contains an active test (it will run):
    - **Test**: The test interacts with the website's registration form.
        - It visits the homepage, triggers a mouseover to reveal the "My Account" menu, and clicks the "Register" option.
        - The test then fills in various form fields (e.g., first name, last name, email, telephone, password, and confirmation).
        - It checks the newsletter and terms agreement checkboxes, then clicks the continue button to submit the form.

### [Skip a specific test with only() command](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/only.cy.js)

```jsx
describe('Skip command in cypress', () => {
    it('First Test: clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it.only('Second Test: Locate and interact with the specified card element on the web page', () => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
        cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
        cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Third Test: clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })
```

From the code above, the it block with the  **only()** command will be the only one executed due to the `.only` command. It navigates to the same product category page, locates a specific card element (via an `nth-child` selector), ensures another product image is visible, and clicks on it.

### [skip blooks with describe.only()](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/only_descibe.cy.js)

```jsx
describe('Select and click the product card', () => {
    it('clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })

    it('Locate and interact with the specified card element on the web page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })

    it('clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })

  describe('Interact with the register form', ()=>{
    it('click the register button and fill in the input tag and click continue', ()=>{
         // Register custom commands : it register a user to the LambdaTest playground platform
         cy.register()
    })
  })

  describe.only('Interact with the Login form', ()=>{
    it('Provide users email and password and login', ()=>{
         // A custom commands : it login a user on the LambdaTest 
         cy.login()
    })
  })
```

Here the above code is as follows

- **Test Suite 1** `describe('Select and click the product card')`: This suite contains three tests that navigate to a product category page and interact with product cards by clicking on them.
    - The first test clicks on the MacBook Air card.
    - The second test clicks on a specified card element after locating a specific link.
    - The third test clicks on the Apple Cinema card.
- **Test Suite 2** `describe('Interact with the register form')`: This suite tests the registration form interaction.
    - The test clicks on the register button, fills in the registration form (first name, last name, email, telephone, password), selects newsletter options, agrees to terms, and submits the form.
- **Test Suite 3** `describe.only('Interact with the Login form')`: This suite focuses on the login process and will be the **only** one executed due to the `.only` command.
    - The test clicks on the login button, enters the user’s email and password, and submits the form.

## Performing skip test on Cypress CLI

### Running a single file on cypress CLI

### Running multiple files on Cypress CLI

### Running all Files on Cypress CLI

## Excluding specFiles within Cypress.config.js

- Using the cypress.config.js file as a why to skip cypress for running test on them.

## Advance skip test functions with Cypress/skip-test plugin

The cypress/skip-test plugins let testers write test that skip based on platform, browser or a URL .

Note the cypress/skip-test plugin needs to be installed for this to work 

### Perform skip test based different browsers

[Example 1: skipOn](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/skipOn.cy.js)

```jsx
// Perform skip test based different browsers
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.skipOn('chrome')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
    });
})
```

Here using the `skipOn`, the above cypress code is executed on any browser it loads on but will not load on Chrome (skip). To see this code in action, try it on both chrome and firefox

[Example 2: onlyOn](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/onlyOn.cy.js)

```jsx
// Perform skip test on chrome 
// Run test on only chrome browser
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.onlyOn('chrome')
         // A custom commands : it login a user on the LambdaTest 
         cy.login()
    });
})
```

Here, the code above will be run only on a chrome browser.

### Perform skip test based on different Operating System

[Example 1 skipOn](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/skipOn_os.cy.js):

```jsx
// Perform skip test on chrome
// run test on all browsers except chrome
describe('Parent Scope Element', () => {
    it('Open the specified url and navigate to the third blog and then click on the link', () => {
        cy.skipOn('windows')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    })
})
```

Here, the code will only run on a mac or any other operating system aside windows. 

[Example 2 onlyOn:](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/onlyOn_os.cy.js)

```jsx

```

Here the code only runs on windows.

[Example 3 chaining onlyOn and skipOn in a code block:](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/chaining_skip_only.cy.js)

```jsx
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
        // A custom commands : it login a user on the LambdaTest 
        cy.login()
    })
})
```

The code above is as follows:

describe 1: This block will only run on a mac and Firefox browser, anything other than that will be skipped.

describe 2: This block will only run on a windows and chrome browser, anything other than that will be skipped.

### [Perform skip test based on URL](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/base_url.cy.js)

```jsx
describe('Test based on URL protocol', () => {
    it('Run the test only if the protocol is HTTPS', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

      cy.location('protocol').then((protocol) => {
        cy.onlyOn(protocol === 'https:');
      });

      // Example test logic
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover');
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a')
        .should('be.visible')
        .click();
      cy.get('#input-email').type('ocxigin@gmail.com');
      cy.get('#input-password').type('mypassword');
      cy.get('#content > div > div:nth-child(2) > div > div > form > input').click();
    });
  });
```

Here, we  are checking the base url and with the help of cy.location we check the protocol to make sure it https before the test case is run. 

## [Combining Assertion with Skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/skip_with_assertion.cy.js)

- Here I explain why its important to use asserting on skip test

```jsx
describe('Test based on URL pathname', () => {
    it('Run code on windows and firefox', () => {
      cy.onlyOn("windows").onlyOn('firefox')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
          cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/index.php')
          })

      // Example test logic
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6)').trigger('mouseover')
      cy.get('#widget-navbar-217834 > ul > li:nth-child(6) > ul > li:nth-child(1) > a')
        .should('be.visible')
        .click()
      cy.get('#input-email').should('have.attr', 'type', 'text').type('ocxigin@gmail.com')
      cy.get('#input-password').should('have.attr', 'type', 'password').type('mypassword')
      cy.get('#content > div > div:nth-child(2) > div > div > form > input').should('have.attr', 'type', 'submit').click()
    })
})
```

## Combining hooks with Cypress skip test

### [before hook with skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/before.cy.js)

```jsx
describe('Verify the Operating system before running', ()=>{
    
    before(() => {
        cy.skipOn('mac').skipOn('firefox')
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

```

The before() method runs once first before the it() block, deciding weather or not cypress is running on the specified OS before performing the test.

### [beforeEach hook with skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/beforeEach.cy.js)

```jsx
describe('Before each blocks of code, check for the specified operating system', () => {
    beforeEach(() => {
        cy.onlyOn('windows').onlyOn('firefox')
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      });

    it('Skipped test: clicked on the Mac Book Air card', () => {
      cy.get('#mz-product-grid-image-44-212408').click()
    })
  
    it('Locate and interact with the specified card element on the web page', () => {
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })
  
    it('Skipped test: clicked on the Apple Cinema card', () => {
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })

```

Here before any of the it block is run, the beforeEach is run to check if the specified operating system and browser is true. and then it open the website before any of the it block can run.

### [after hook with skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/after.cy.js)

```jsx
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

```

The after hook runs after the it blocks have completed executing. Is using if you want to perform the skip test after every it block have run.

### [afterEach hook with skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/afterEach.cy.js)

```jsx
describe('Run the afterEach after the completion of a it block', () => {

    afterEach(() => {
        cy.onlyOn('mac').onlyOn('chrome')
    });

    it('clicked on the Mac Book Air card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-44-212408').click()
    })

    it('Locate and interact with the specified card element on the web page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25');
    cy.get('#entry_212409 > div > div.col-sm-6.text-left > ul > li:nth-child(7) > a').click();
    cy.get('#mz-product-grid-image-100-212408').should('be.visible').click();
    })

    it('clicked on the Apple Cinema card', () => {
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25')
      cy.get('#mz-product-grid-image-42-212408').click()
    })
  })
```

Run the afterEach after the completion of a it block

## [Handling Errors with Cypress Skip test](https://github.com/alex-anie/Cypress-Skip-test-feature/blob/main/cypress/e2e/error_skip.cy.js)

- Here, I explain how errors can be handle with skip test.
- The initial page is load
- If the page fails to load (for example, due to a `404` error), we skip the test using `cy.skipOn()`.
- Otherwise, we proceed with the test.

```jsx
describe('Test with error handling and Cypress Skip Test', () => {
    let getStatusCode;
  
    before(() => {
      // Make a request to the page and capture the status code
      cy.request({
        url: 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home',
        failOnStatusCode: false,  // Do not fail the test if the request fails
      }).then((response) => {
        getStatusCode = response.status;
        cy.log(`Page status code: ${getStatusCode}`);
      });
    });
  
    it('Test only if page loads successfully', () => {
      // Skip the test if the page did not load successfully (e.g., 404 error)
      cy.skipOn(getStatusCode !== 200);
  
      // If page loaded successfully, perform actions on the page
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6');
        cy.get('#entry_210951 > div > div:nth-child(3) > div > div.caption > a').should('be.visible').click()
        cy.get('#entry_210900 > nav > ol > li:nth-child(3) > a').should('be.visible').click()
        cy.get('#entry_210951 > div > div:nth-child(5) > div > div.caption > a').should('be.visible').click()
    });
  });
  
```

## Best Practices with Cypress Skip test

- Explain best practices to write better skip test with Cypress

## Conclusion

## References

- [Official Docs](https://docs.cypress.io/app/references/bundled-libraries)
- [Mocha](https://mochajs.org/#hooks)
- https://www.browserstack.com/guide/cypress-skip-test

## `cypress open`

You can open Cypress from your **project root** using the commands, depending on the package manager. In this case, we are using `npm`. You can learn more about another package manager [here](/cypress/downloads/thumbnail.png)

```bash
npx cypress open
```

After a moment, the Cypress Launchpad will open.

## `lambdaTest Run`

You can run cypress via Lambdatest web automation via npm. Learn how to setup lambdaTest and Cypress [here](https://www.lambdatest.com/support/docs/getting-started-with-cypress-testing/#/prerequisites)

```bash
lambdatest-cypress run
```

This will run Cypress on LambdaTest Web Automation.