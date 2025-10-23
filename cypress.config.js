const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  experimetalStudio: true,
  retries: 2,
  projectId: "extu3j",
  e2e: {
    experimentalPromptCommand: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://saka.fi/en",

    experimetalStudio: true,
  },
});
