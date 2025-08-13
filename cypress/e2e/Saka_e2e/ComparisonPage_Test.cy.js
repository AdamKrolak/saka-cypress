/// <reference types="cypress"/>

import { CategoryPage } from "./page_objects/categoryPage";
import { ComparisonPage } from "./page_objects/comparisonPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";

var homePage = new HomePage();
var navigationMenu = new NavigationMenu();
var categoryPage = new CategoryPage();
var comparisonPage = new ComparisonPage();

beforeEach(() => {
  cy.visit("diesel-cars");
  //homePage.acceptAllCookies();
  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined")
    ) {
      return false;
    }
  });
});

describe("Smoke test for Comparison page.", () => {
  it("Verify that user can add cars to comparison feature from category page", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
  });

  it("Verify that the comparison sidebar is available on the left side of the category page", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.comparisonSidebar().should("be.visible");
  });

  it("Verify content the comparison sidebar on category page", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.sidebarCar1().should("be.visible");
  });

  it("Verify that user can add 3 cars to comparison sidebar from category page", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.compareCar2Cat().click({ force: true });
    comparisonPage.compareCar3Cat().click({ force: true });
    comparisonPage.compareCar4Cat().click({ force: true });
    comparisonPage.compareCar5Cat().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("be.visible");
  });

  it("Verify that user is not able to add more than 3 cars to comparison sidebar", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.compareCar2Cat().click({ force: true });
    comparisonPage.compareCar3Cat().click({ force: true });
    comparisonPage.compareCar4Cat().click({ force: true });
    comparisonPage.compareCar5Cat().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("be.visible");
    comparisonPage.sidebarMessage().should("be.visible").contains("full");
  });

  it("Verify that user can hide and open comparison widget", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.closeOpenSidebar().click({ force: true });
    comparisonPage.comparisonSidebar().should("not.be.visible");
    comparisonPage.closeOpenSidebar().click({ force: true });
    comparisonPage.comparisonSidebar().should("be.visible");
  });

  it("Verify that user can remove car from comparison sidebar", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.compareCar2Cat().click({ force: true });
    comparisonPage.compareCar3Cat().click({ force: true });
    comparisonPage.compareCar4Cat().click({ force: true });
    comparisonPage.compareCar5Cat().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("be.visible");
    comparisonPage.removeCarButton().click({ force: true });
    comparisonPage.closeOpenSidebar().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("not.exist");
  });

  it("Verify that user can navigate to comparison page", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.compareCar2Cat().click({ force: true });
    comparisonPage.compareCar3Cat().click({ force: true });
    comparisonPage.compareCar4Cat().click({ force: true });
    comparisonPage.compareCar5Cat().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("be.visible");
    comparisonPage.goToComparePageBtn().click({ force: true });
    cy.url().should("be.equal", "https://saka.fi/fi/vertailu");
  });

  it("Verify content of comparison page ", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.scrollTo(0, 200);
    comparisonPage.compareCar1Cat().should("be.visible").click({ force: true });
    comparisonPage.compareCar2Cat().click({ force: true });
    comparisonPage.compareCar3Cat().click({ force: true });
    comparisonPage.compareCar4Cat().click({ force: true });
    comparisonPage.compareCar5Cat().click({ force: true });
    comparisonPage.sidebarCar31().should("be.visible");
    comparisonPage.sidebarCar32().should("be.visible");
    comparisonPage.sidebarCar33().should("be.visible");
    comparisonPage.goToComparePageBtn().click({ force: true });
    comparisonPage.title().should("be.visible");
    comparisonPage.descripiton().should("be.visible");
    comparisonPage.carHeader1().should("be.visible");
    comparisonPage.carHeader2().should("be.visible");
    comparisonPage.carHeader3().should("be.visible");
    comparisonPage.carTile1().should("be.visible");
    comparisonPage.carTile2().should("be.visible");
    comparisonPage.carTile3().should("be.visible");
    comparisonPage.price1().should("be.visible");
    comparisonPage.price2().should("be.visible");
    comparisonPage.price3().should("be.visible");
  });
});
