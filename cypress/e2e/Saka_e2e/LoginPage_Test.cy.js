/// <reference types="cypress"/>

import { HomePage } from "./page_objects/homePage";
import { LoginPage } from "./page_objects/loginPage";
import { MyAccount } from "./page_objects/myAccount";
import { NavigationMenu } from "./page_objects/navigationMenu";

var homePage = new HomePage();
var navigationMenu = new NavigationMenu();
var loginPage = new LoginPage();
var myAccount = new MyAccount();

beforeEach(() => {
  cy.acceptCookiesBySetting();
  cy.visit("/auth/login");
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

describe("Smoke test for Login Page.", () => {
  it("The user can login to My Account using email", () => {
    loginPage.verifyLoginpageUrl();
    loginPage.emailField().type("adam.krolak+2@vaimo.com", { force: true });
    loginPage.passwordField().type("zaq12WSX", { force: true });
    loginPage.signInEmailButton().click({ force: true });
    cy.wait(1000);
    //myAccount.verifyMySakapageUrl();
    cy.url().should("be.equal", "https://saka.fi/my-saka");
  });

  it("The user cannot login with invalid email address. An error message is displayed", () => {
    loginPage.verifyLoginpageUrl();
    loginPage.emailField().type("adam3krolak@vaimo.com", { force: true });
    loginPage.passwordField().type("zaq12WSX", { force: true });
    loginPage.signInEmailButton().click({ force: true });
    cy.wait(500);
    loginPage.errorMessage().should("be.visible");
    cy.url().should("not.be.equal", "https://saka.fi/en/my-saka");
    loginPage.verifyLoginpageUrl();
  });

  it("The user cannot login with invalid password. An error message is displayed", () => {
    loginPage.verifyLoginpageUrl();
    loginPage.emailField().type("adam.krolak+2@vaimo.com", { force: true });
    loginPage.passwordField().type("zaq13332WSX", { force: true });
    loginPage.signInEmailButton().click({ force: true });
    cy.wait(500);
    loginPage.errorMessage().should("be.visible");
    cy.url().should("not.be.equal", "https://saka.fi/en/my-saka");
    loginPage.verifyLoginpageUrl();
  });

  it("Validate reset password page, reset password form is displayed", () => {
    loginPage.verifyLoginpageUrl();
    loginPage.forgotPasswordLink().click({ force: true });
    loginPage
      .forgotPasswordForm()
      .should("be.visible")
      .and("contain", "Forgot Password");
    loginPage
      .forgotPasswordForm()
      .should(
        "contain",
        "Enter your email address and we will send you a link to reset your password."
      );
    loginPage.sendEmailBtn().should("be.visible").and("contain", "Send email");
    loginPage.emailFieldResetPass2().should("be.visible");
  });

  it("The user can reset the password. Confirmation message is displayed", () => {
    loginPage.verifyLoginpageUrl();
    loginPage.forgotPasswordLink().click({ force: true });

    loginPage.emailFieldResetPass2().type("adam.krolak+2@vaimo.com", {
      force: true,
    });

    loginPage.sendEmailBtn().click({ force: true });

    loginPage.forgotPasswordSuccessMsg().should("be.visible");
  });
});
