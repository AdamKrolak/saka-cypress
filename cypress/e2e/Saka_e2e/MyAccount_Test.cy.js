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
  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined") ||
      err.message.includes("NEXT_REDIRECT")
    ) {
      return false;
    }
  });
  //homePage.acceptAllCookies();
  loginPage.emailField().type("adam.krolak+2@vaimo.com", { force: true });
  loginPage.passwordField().type("zaq12WSX", { force: true });
  loginPage.signInEmailButton().click({ force: true });
});

describe("Smoke test for My Saka Page.", () => {
  it("The user can loging with valid credentials, hero banner is display and  welcome text contains user name", () => {
    cy.wait(500);
    myAccount.welcomeText().should("be.visible").should("contain", "Adam");
  });

  it("Verify that my account navigation buttons are visible", () => {
    cy.wait(500);
    myAccount.favouriteCarsBtn().should("be.visible");
    myAccount.myCarsBtn().should("be.visible");
    myAccount.dashboardBtn().should("be.visible");
    myAccount.myProfileBtn().should("be.visible");
    myAccount.offersBtn().should("be.visible");
  });

  it("Validate content of the dashboard", () => {
    cy.wait(500);
    myAccount.welcomeBanner().should("be.visible");
    myAccount.ourArticles().should("be.visible");
    myAccount.myPages().should("be.visible");
    myAccount.yourFavCars().should("be.visible");
    myAccount.yourOffers().should("be.visible");
  });

  it("Favourite cars are displayed on the dashboard", () => {
    cy.wait(500);
    cy.scrollTo(0, 200);
    myAccount.favouriteCarA().eq(0).should("be.visible");
    myAccount.favouriteCarA().eq(1).should("be.visible");
    myAccount.favouriteCarA().eq(2).should("be.visible");
    myAccount.favouriteCar1().should("be.visible");
    myAccount.favouriteCar2().should("be.visible");
  });

  it("The user has access to an articles on the dashboard", () => {
    cy.wait(500);
    myAccount.article1().should("be.visible");
    myAccount.article2().should("be.visible");
  });

  it("The user can navigate to My Cars section. Verify the content of the page ", () => {
    cy.wait(2000);
    myAccount.myCarsBtn().click({ force: true });
    myAccount.myCarsTitle().should("be.visible");
    // myAccount.myCar1().should("be.visible");
    //myAccount.myCar2().should("be.visible");
    cy.scrollTo(0, 200);
    myAccount.myCarsBtn().should("be.visible");
    cy.get(".top-0 > .flex").click({ force: true });
    myAccount.myCarsBtn().click({ force: true });
  });
  it("Verify that the user can add a car to My Cars ", () => {
    cy.wait(2000);
    myAccount.myCarsBtn().click({ force: true });
    myAccount.myCarsTitle().should("be.visible");
    cy.scrollTo(0, 200);
    myAccount.myCarsBtn().should("be.visible");
    cy.get(".top-0 > .flex").click({ force: true });
    myAccount.addCar().click({ force: true });
    myAccount.fields().should("be.visible");
    myAccount.addImage().should("be.visible");
    myAccount.addCarForm().should("be.visible");
  });

  it("The user can navigate to My Favourite Cars section. Verify content of the page", () => {
    cy.wait(500);
    myAccount.favouriteCarsBtn().click({ force: true });
    myAccount.myFavCarsTitle().should("be.visible");
    myAccount.myFavCar1().should("be.visible");
    myAccount.myFavCar2().should("be.visible");
    myAccount.recommendedCarsTitle().should("be.visible");
    myAccount.recommendedCar1().should("be.visible");
    myAccount.recommendedCarsNavigation().should("be.visible");
  });

  it("The user can navigate to My Profile section. Verify content of the page", () => {
    cy.wait(1500);
    cy.scrollTo(0, 100);

    myAccount.myProfileBtn().click({ force: true });
    cy.get(":nth-child(4) > .border-primary-400").click({ force: true });
    cy.get(
      ":nth-child(1) > .flex-col > :nth-child(2) > .border-primary-400"
    ).click({ force: true });
    cy.scrollTo(0, 100);
    myAccount.myProfileBtn().click({ force: true });
    cy.wait(500);
    myAccount.myProfileTitle().should("be.visible");
    myAccount.firstName().should("be.visible").and("contain", "Adam");
    myAccount.lastName().should("be.visible").and("contain", "Krolak");
    myAccount.phoneNumber().should("be.visible").and("contain", "0837996876");
    myAccount
      .email()
      .should("be.visible")
      .and("contain", "adam.krolak+2@vaimo.com");
    myAccount.editProfileBtn().should("be.visible");
  });

  it("The user can navigate to Offers section. Verify content of the page", () => {
    cy.wait(1500);
    cy.scrollTo(0, 500);
    myAccount.offersBtn().click({ force: true });
    myAccount.offersTitle().should("be.visible");
    // myAccount.offersContent().should("be.visible");
  });

  it("The user can log out and is redirected to login page", () => {
    cy.wait(1000);
    cy.url().should("be.equal", "https://saka.fi/my-saka");
    myAccount.myAccoutIcon().click();
    navigationMenu.loginDropdown().should("be.visible");
    navigationMenu.logOutBtn().click();
    cy.url().should("be.equal", "https://saka.fi/fi/auth/kirjaudu");
  });
});
