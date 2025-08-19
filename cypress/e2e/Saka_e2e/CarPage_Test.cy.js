/// <reference types="cypress"/>

import { CarPage } from "./page_objects/carPage";
import { CategoryPage } from "./page_objects/categoryPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";

var homePage = new HomePage();
var carPage = new CarPage();
var categoryPage = new CategoryPage();

beforeEach(() => {
  cy.visit("hybrid-cars");
  cy.wait(1000);
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

describe("Smoke test for Car page.", () => {
  it("Verify that user can navigate from category page to the car page ", () => {
    cy.url().should("be.equal", "https://saka.fi/en/hybrid-cars");
    categoryPage.car1().click({ force: true });
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
    // cy.get('[style="transform: translate3d(0px, 0px, 0px);"]')
    //   .find(".aspect-\\[1076\\/694\\]")
    //   .should("be.visible");
    carPage.carImage().should("be.visible");
    carPage.firstGallImage().should("be.visible");
  });

  it("Verify that name of the car is visible", () => {
    categoryPage.car1().click({ force: true });
    carPage.carName().should("be.visible");
  });

  it("Verify that short description of the car is visible", () => {
    categoryPage.car1().click({ force: true });
    carPage.carShorDsc().should("be.visible");
  });

  it("Verify that car price is visible", () => {
    categoryPage.car1().click({ force: true });
    carPage.carPrice().should("be.visible");
  });

  it("Verify that breadcrumbs are displayed ", () => {
    categoryPage.car1().click({ force: true });
    carPage.breadcrumbs().should("be.visible");
  });

  it("Verify that financing calculator is visible ", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(1000);
    carPage.financingBtn().should("be.visible");
    carPage.financingBtn().click({ force: true });
    //carPage.financingCalc().should("be.visible");
  });

  it("Verify that basic info of the car are available", () => {
    categoryPage.car1().click({ force: true });
    carPage.mileage().should("be.visible");
    carPage.yearOfManNew().should("be.visible");
    carPage.type().should("be.visible");
    carPage.transmission().should("be.visible");
  });

  it("Verify that user can view image in full screen", () => {
    categoryPage.car1().click({ force: true });
    carPage.fullScreenBtn().click({ force: true });
    carPage.fullImage().should("be.visible");
  });

  it("Verify that user can minimise image", () => {
    categoryPage.car1().click({ force: true });
    carPage.fullScreenBtn().click({ force: true });
    carPage.minimiseBtn().click({ force: true });
    carPage.minimiseBtn().should("not.exist");
  });

  it("Verify use can expand equpiment accordion and the content is visible ", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo(0, 500);
    //carPage.equAcc().should("be.visible");
    carPage.equAcc().click({ force: true });
    //carPage.equAccTitle().should("be.visible");
    carPage.equAccContent().should("be.visible");
  });

  it("Verify use can expand basic information accordion and the content is visible ", () => {
    categoryPage.car1().click({ force: true });
    cy.get('div[data-id="car-details-desktop"]')
      .find("button")
      .contains("Basic Information");
    // cy.get(".md\\:block > :nth-child(1)")
    //   .contains("Basic Information")
    //   .click({ force: true });
    //carPage.basicInfoAcc().should("be.visible");
    carPage.basicInfoAcc().click({ force: true });
    carPage.basicInfoTitle().should("be.visible");
    carPage.basicInfoAccCont().should("be.visible");
  });

  it("Verify use can expand technical information accordion and the content is visible ", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo(0, 500);
    //carPage.techInfoAcc().should("be.visible");
    carPage.techInfoTitle().should("be.visible");
    carPage.techInfoAcc().click({ force: true });
    carPage.techInfoAcc().should("be.visible");
  });

  it("Verify use can expand condition report accordion and the condition form is available ", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo(0, 500);
    carPage.condRepotTitle().should("be.visible");
    //carPage.condRepotAcc().should("be.visible");
    carPage.condRepotAcc().click({ force: true });
    carPage.condRepotAccForm().should("be.visible");
  });

  it("Verify that Related vehicels section is displayed", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo("bottom");
    carPage.relatedCarTitle().should("be.visible");
    carPage.relatedCarSection().should("be.visible");
    carPage.relatedCarFirstCar().should("be.visible");
  });

  it("Verify that user can navigate to related car page", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo("bottom");
    cy.wait(2500);
    carPage.relatedCarFirstCar().click({ force: true });
  });

  it("Verify that SakaVarma is visible", () => {
    categoryPage.car1().click({ force: true });
    carPage.sakaVarma().should("be.visible");
  });

  it("Verify that Sales People section is visible", () => {
    categoryPage.car1().click({ force: true });
    cy.wait(500);
    cy.scrollTo("bottom");
    cy.wait(1500);
    cy.scrollTo("center");
    carPage.salesPeopleTitle().scrollIntoView().should("be.visible");
    carPage.salesPeopleSection().scrollIntoView().should("be.visible");
    carPage.salesPeopleFirst().scrollIntoView().should("be.visible");
  });
});
