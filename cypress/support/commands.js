// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("acceptCookiesBySetting", () => {
  cy.visit("https://saka.fi", { failOnStatusCode: false });

  const consentCookies = [
    { name: "CookieConsent", value: "true" },
    { name: "cookieconsent_status", value: "dismiss" },
    { name: "OptanonConsent", value: "true" },
    { name: "euconsent-v2", value: "CPxxxxxx" },
    { name: "Cookiebot", value: "true" },
  ];

  consentCookies.forEach((c) => cy.setCookie(c.name, c.value));

  cy.window().then((win) => {
    try {
      win.localStorage.setItem("cookieconsent_status", "dismiss");
    } catch (e) {}
  });
});
