export class LoginPage {
  verifyLoginpageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en/auth/login");
  }

  loginBanner() {
    return cy.get(".max-w-fit");
  }

  sakaLogo() {
    return cy.get(".max-w-fit > .w-fit > img");
  }

  emailField() {
    return cy.get(".max-w-fit > .space-y-6 > :nth-child(1)").find("input");
  }

  passwordField() {
    return cy.get(".space-y-6 > :nth-child(2)").find("input");
  }

  signInEmailButton() {
    return cy.get(".space-y-6 > .relative");
  }

  signInGoogleButton() {
    return cy.get(".space-y-6 > .bg-white");
  }

  errorMessage() {
    return cy.get(".max-h-screen > .group");
  }

  forgotPasswordLink() {
    return cy.get(".mt-2");
  }

  forgotPasswordForm() {
    return cy.get(".max-w-\\[400px\\]");
  }

  sendEmailBtn() {
    return cy.get(".space-y-6 > .inline-flex");
  }

  emailFieldResetPass() {
    return cy.get("#\\:rf\\:-form-item");
  }

  emailFieldResetPass2() {
    return cy.get('form[class="space-y-6 w-full"]').find('input[name="email"]');
  }

  forgotPasswordSuccessMsg() {
    return cy.get(".text-neutral-300");
  }
}
