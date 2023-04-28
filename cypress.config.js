const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: 'https://2023q1-5.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
  env: {
    codeCoverageTasksRegistered: true,
  },

});