/// <reference types="cypress"/>

import { CarPage } from "./page_objects/carPage";
import { CategoryPage } from "./page_objects/categoryPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";

var homePage = new HomePage();
var carPage = new CarPage();
var categoryPage = new CategoryPage();

// Helper to open a car using a categoryPage getter function
function openCar(carGetter) {
  // receive a function like: () => categoryPage.car6()
  carGetter().scrollIntoView().click({ force: true });
  cy.wait(500);
}

beforeEach(() => {
  cy.acceptCookiesBySetting();
  cy.visit("hybrid-cars");
  cy.wait(1000);
  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined")
    ) {
      return false;
    }
  });
});

describe("Smoke test for Car page.", () => {
  it("Verify that user can navigate from category page to the car page ", () => {
    cy.url().should("be.equal", "https://saka.fi/en/hybrid-cars");
    openCar(() => categoryPage.car6());
    cy.url().should("contain", "https://saka.fi/en/cars/");
  });

  it("Verify that image and gallery of the cars is displayed", () => {
    cy.visit("/");
    cy.scrollTo(0, 1000);
    homePage.homePageMid().contains("Electric cars").should("be.visible");
    homePage
      .electricCar1()
      .should("be.visible")
      .find(".m-0")
      .click({ force: true });
    carPage.carImage().should("be.visible");
    carPage.firstGallImage().should("exist");
  });

  it("Verify that name of the car is visible", () => {
    openCar(() => categoryPage.car1());
    carPage.carName().should("exist");
  });

  it("Verify that short description of the car is visible", () => {
    openCar(() => categoryPage.car1());
    carPage.carShorDsc().should("be.visible");
  });

  it("Verify that car price is visible", () => {
    openCar(() => categoryPage.car1());
    carPage.carPrice().should("be.visible");
  });

  it("Verify that breadcrumbs are displayed ", () => {
    openCar(() => categoryPage.car1());
    carPage.breadcrumbs().should("be.visible");
  });

  it("Verify that financing calculator is visible ", () => {
    openCar(() => categoryPage.car1());
    carPage.financingBtn().should("be.visible").click({ force: true });
  });

  it("Verify that user can view image in full screen", () => {
    openCar(() => categoryPage.car6());
    carPage.fullScreenBtn().click({ force: true });
    carPage.fullImage().should("be.visible");
  });

  it("Verify that user can minimise image", () => {
    openCar(() => categoryPage.car6());
    carPage.fullScreenBtn().click({ force: true });
    carPage.minimiseBtn().click({ force: true });
    carPage.minimiseBtn().should("not.exist");
  });

  it("Verify use can expand basic information accordion and the content is visible ", () => {
    openCar(() => categoryPage.car6());
    carPage.basicInfoAcc().should("be.visible").click({ force: true });
    carPage.basicInfoTitle().should("be.visible");
    carPage.basicInfoAccCont().should("be.visible");
  });

  it("Verify use can expand technical information accordion and the content is visible ", () => {
    openCar(() => categoryPage.car6());
    cy.scrollTo(0, 500);
    carPage.techInfoTitle().should("be.visible");
    carPage.techInfoAcc().click({ force: true });
    carPage.techInfoAcc().should("be.visible");
  });

  it("Verify use can expand condition report accordion and the condition form is available ", () => {
    openCar(() => categoryPage.car4());
    cy.scrollTo(0, 500);
    carPage.condRepotTitle().should("be.visible");
    carPage.condRepotAcc().click({ force: true });
    carPage.condRepotAccForm().should("be.visible");
  });

  it("Verify that Related vehicels section is displayed", () => {
    openCar(() => categoryPage.car6());
    cy.scrollTo("bottom");
    carPage.relatedCarTitle().should("be.visible");
    carPage.relatedCarSection().should("be.visible");
    carPage.relatedCarFirstCar().should("be.visible");
  });

  it("Verify that user can navigate to related car page", () => {
    openCar(() => categoryPage.car6());
    cy.scrollTo("bottom");
    cy.wait(2500);
    carPage.relatedCarFirstCar().click({ force: true });
  });

  it("Verify that SakaVarma is visible", () => {
    openCar(() => categoryPage.car6());
    carPage.sakaVarma().should("be.visible");
  });

  it("Verify that Sales People section is visible", () => {
    openCar(() => categoryPage.car6());
    cy.scrollTo("bottom");
    cy.wait(1500);
    cy.scrollTo("center");
    carPage.salesPeopleTitle().scrollIntoView().should("be.visible");
    carPage.salesPeopleSection().scrollIntoView().should("be.visible");
    carPage.salesPeopleFirst().scrollIntoView().should("be.visible");
  });
});
