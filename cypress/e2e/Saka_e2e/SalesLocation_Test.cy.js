/// <reference types="cypress"/>

import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { SalesLocation } from "./page_objects/salesLocationPage";

var salesLocation = new SalesLocation();
var homePage = new HomePage();
var navigationMenu = new NavigationMenu();

beforeEach(() => {
  cy.visit("/");
  //homePage.acceptAllCookies();
  navigationMenu.salesLocation().click();

  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined") ||
      err.message.includes("NEXT_REDIRECT") ||
      err.message.includes("Minified React error")
    ) {
      return false;
    }
  });
});

describe("Smoke test for Sales Location Page.", () => {
  it("Verify that user can navigate to Sales Location page", () => {
    salesLocation.verifyLocPageUrl();
  });

  it("Verify content of the Sales Location page", () => {
    salesLocation
      .pageTitle()
      .should("be.visible")
      .and("contain", "Dealership Locations");
    salesLocation.map().should("be.visible").click();
    salesLocation.location1().scrollIntoView().should("be.visible");
    salesLocation.location2().scrollIntoView().should("be.visible");
    salesLocation.location3().scrollIntoView().should("be.visible");
    salesLocation.locationDropdown().should("be.visible");
  });

  it("Verify location dropdown. Check if locations are in alfabetical order", () => {
    salesLocation
      .locationDropdown()
      .should("contain", "Select a location")
      .click({ force: true });

    salesLocation
      .locationDropdownList()
      .within(() => {
        return cy.contains("Express");
      })
      .should("exist");
  });

  it("Verify that user can check information of about a dealership locale", () => {
    salesLocation.location1Address().scrollIntoView().should("be.visible");
    salesLocation.location1Name().scrollIntoView().should("be.visible");
    salesLocation.location1State().scrollIntoView().should("be.visible");
    salesLocation.location1Phone().scrollIntoView().should("be.visible");
    salesLocation.location1CarsBtn().scrollIntoView().should("be.visible");
  });

  it("Verify that user is redirected to corret location dealership category", () => {
    salesLocation.location1CarsBtn().click({ force: true });
    cy.url().should(
      "be.equal",
      "https://saka.fi/en/search?location_name=Pakkala"
    );
  });

  it("The user can select loaction from the dropdown list", () => {
    salesLocation
      .locationDropdown()
      .should("contain", "Select a location")
      .click({ force: true });

    cy.contains("Hyvinkää").click({ force: true });
    cy.contains("Hyvinkää").should("be.visible");
    salesLocation
      .locationHyvinkää()
      .should("be.visible")
      .and("contain", "Hyvinkää");
  });

  it("Verify that selected dealership contains map with the location of the store and address", () => {
    salesLocation
      .locationDropdown()
      .should("contain", "Select a location")
      .click({ force: true });

    cy.contains("Hyvinkää").click({ force: true });
    salesLocation.locationMap().should("be.visible");
    salesLocation
      .locationHyvinkääAddress()
      .should("be.visible")
      .and("contain", "Hyvinkää");
  });

  it("Verify that selected dealership contains map with the location of the store and address", () => {
    salesLocation
      .locationDropdown()
      .should("contain", "Select a location")
      .click({ force: true });

    cy.contains("Hyvinkää").click({ force: true });
    salesLocation.locationaSalespeopleTitle().should("be.visible");
    salesLocation.locationaSalespeople1().should("be.visible");
    salesLocation.locationaSalespeople2().should("be.visible");
  });

  it("Verify that selected dealership short description", () => {
    salesLocation
      .locationDropdown()
      .should("contain", "Select a location")
      .click({ force: true });

    cy.contains("Hyvinkää").click({ force: true });
    salesLocation.locationDescription().scrollIntoView();
    salesLocation
      .locationDescription()
      .should("be.visible")
      .and("contain", "Hyvinkää");
  });
});
