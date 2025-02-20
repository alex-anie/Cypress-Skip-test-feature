const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // excludeSpecPattern: [
    //   "cypress/e2e/after.cy.js",
    //   "cypress/e2e/afterEach.cy.js",
    //   "cypress/e2e/before.cy.js",
    //   "cypress/e2e/beforeEach.cy.js",
    //   "cypress/e2e/error_skip.cy.js"
    // ],
  },
});
