/// <reference types="cypress"/>

import { HomePage } from "./page_objects/homePage";
import { LoginPage } from "./page_objects/loginPage";
import { MyAccount } from "./page_objects/myAccount";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { RegistrationPage } from "./page_objects/registrationPage";

var homePage = new HomePage();
var registrationPage = new RegistrationPage();
var loginPage = new LoginPage();
var myAccount = new MyAccount();

beforeEach(() => {
  cy.visit("/auth/register");
  //homePage.acceptAllCookies();
  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined") ||
      err.message.includes("NEXT_REDIRECT")
    ) {
      return false;
    }
  });
});

describe("Smoke test for Registration Page.", () => {
  it("Verify that Sign Up form and all fields are visible", () => {
    registrationPage.verifyRegPageUrl();
    registrationPage.pageTitle().should("be.visible");
    registrationPage.signUpForm().should("be.visible");
    registrationPage.confirmPasswordField().should("be.visible");
    registrationPage.createPasswordField().should("be.visible");
    registrationPage.sakaLogo().should("be.visible");
    registrationPage.sendVerificationButton().should("be.visible");
    registrationPage.signInGoogleButton().should("be.visible");
  });

  //   it("Verify login with invalid credentials - wrong email. An error message is displayed", () => {
  //     loginPage.verifyLoginpageUrl();
  //     loginPage.emailField().type("adam3krolak@vaimo.com", { force: true });
  //     loginPage.passwordField().type("zaq12WSX", { force: true });
  //     loginPage.signInEmailButton().click({ force: true });
  //     cy.wait(500);
  //     loginPage.errorMessage().should("be.visible");
  //     cy.url().should(
  //       "not.be.equal",
  //       "https://saka-website.vercel.app/en/my-saka"
  //     );
  //     loginPage.verifyLoginpageUrl();
  //   });

  //   it("Verify login with invalid credentials - wrong password. An error message is displayed", () => {
  //     loginPage.verifyLoginpageUrl();
  //     loginPage.emailField().type("adam.krolak@vaimo.com", { force: true });
  //     loginPage.passwordField().type("zaq13332WSX", { force: true });
  //     loginPage.signInEmailButton().click({ force: true });
  //     cy.wait(500);
  //     loginPage.errorMessage().should("be.visible");
  //     cy.url().should(
  //       "not.be.equal",
  //       "https://saka-website.vercel.app/en/my-saka"
  //     );
  //     loginPage.verifyLoginpageUrl();
  //   });
});
