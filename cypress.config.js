//import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth:1920,
  watchForFileChanges: false,
  video:true,
  //reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config);

      return config;
    },
  },
});
