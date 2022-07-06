const { defineConfig } = require("cypress");
// module.exports = {
//   projectId: "otkkof"
//   // The rest of the Cypress config options go here...
// }

module.exports = defineConfig({
  projectId: "otkkof",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
