const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: true,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'https://gorest.co.in/public/v2', // Replace with your API base URL
    specPattern: 'cypress/e2e/**/*.js',
    projectId: "z5jokj",

  },
  env: {
    API_TOKEN: "ef3154e333845ebbc2360a492a6790399b57b3cc20ff095dfd8c6423fc72579c", // Move API_TOKEN here
  },

});