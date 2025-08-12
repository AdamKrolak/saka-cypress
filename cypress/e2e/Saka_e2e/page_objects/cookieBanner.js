export class CookieBanner {
  cookieBanner() {
    return cy.get(".ot-sdk-container > .ot-sdk-row");
  }
  acceptAllCookies() {
    cy.get("#onetrust-accept-btn-handler").click();
  }
}
