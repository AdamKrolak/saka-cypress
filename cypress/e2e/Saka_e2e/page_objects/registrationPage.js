export class RegistrationPage {
  verifyRegPageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en/auth/register");
  }

  pageTitle() {
    return cy.get(".my-4");
  }

  signUpForm() {
    return cy.get(".max-w-fit");
  }

  sakaLogo() {
    return cy.get(".max-w-fit > .w-fit > img");
  }

  emailField() {
    return cy.get("#\\:ri\\:-form-item");
  }

  createPasswordField() {
    return cy.get("#\\:Ra7rrtadfb\\:-form-item");
  }

  confirmPasswordField() {
    return cy.get("#\\:Re7rrtadfb\\:-form-item");
  }

  sendVerificationButton() {
    return cy.get(".space-y-6 > .relative");
  }

  signInGoogleButton() {
    return cy.get(".space-y-6 > .bg-white");
  }

  errorMessage() {
    return cy.get(".max-h-screen > .group");
  }
}
