/// <reference types="cypress"/>

import { CategoryPage } from "./page_objects/categoryPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { SearchPage } from "./page_objects/searchPage";
import { SearchSuggestions } from "./page_objects/searchSuggestion";

var homePage = new HomePage();
var navigationMenu = new NavigationMenu();
var searchSuggestions = new SearchSuggestions();
var searchPage = new SearchPage();
var categoryPage = new CategoryPage();

beforeEach(() => {
  cy.visit("/");
  homePage.acceptAllCookies();
  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("fbq is not defined") ||
      err.message.includes("Cannot read properties of undefined")
    ) {
      return false; // prevents Cypress from failing the test
    }
  });
});

describe("Smoke test for the search", () => {
  it("Verify search suggestions are displayed", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchSuggestions().should("be.visible");
  });

  it("Verify user can enter key word to search input field", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().should("be.visible");
    searchSuggestions.searchInput().type("volvo");
  });

  it("Verify that search suggiestions match entered input", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().should("be.visible");
    searchSuggestions.searchInput().type("volvo");
    searchSuggestions.searchSugCarTitle1().should("contain", "Volvo");
  });

  it("Verify user can navigate to search result page", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().should("be.visible");
    searchSuggestions.searchInput().type("volvo{enter}");
    cy.url().should("be.equal", "https://saka.fi/en/search?q=volvo");
  });

  it("Verify search result page content", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    cy.url().should("be.equal", "https://saka.fi/en/search?q=volvo");
    searchPage.heroBanner().should("be.visible");
    searchPage
      .heroTitle()
      .should("be.visible")
      .and("contain", 'Search results for "volvo"');
  });

  it("Verify that search result counter is visble", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.carsCounter().should("be.visible");
  });

  it("Verify that search result filters are visble", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.filters().should("be.visible");
  });

  it("Verify sorting options", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.sortingOptions().should("be.visible");
    searchPage.sortingOptions().click({ force: true });
  });

  it("Verify pagination of the search result page", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    cy.scrollTo("bottom");
    searchPage.pagination().should("be.visible").and("contain", "1");
  });

  it("Verify that user can navigate to next page of the search results", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    cy.wait(2000);
    cy.scrollTo("bottom");
    searchPage.nextPage().click({ force: true });
    cy.wait(2000);
    searchPage.pagination().should("be.visible").and("contain", "2");
    cy.url().should("be.equal", "https://saka.fi/en/search?q=volvo&page=2");
  });

  it("Verify that user can navigate to a car page from serch reasul page", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    cy.url().should("be.equal", "https://saka.fi/en/search?q=volvo");
    cy.wait(1000);
    categoryPage.car1().click({ force: true });
    cy.url().should("include", "https://saka.fi/en/cars/Volvo");
  });

  it("Verify car cards on search result page", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.car1().should("be.visible").and("contain", "Volvo");
    searchPage.car1Image().should("be.visible");
    searchPage.car2Price().should("be.visible");
    searchPage.car2Accessories().should("be.visible");
    searchPage.car2CompareBtn().should("be.visible");
    searchPage.car2CallBtn().should("be.visible");
    searchPage.car2MessageBtn().should("be.visible");
  });

  it("Verify filtering of the search results", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.filterModel().click({ force: true });
    searchPage.modelList().contains("XC60").click({ force: true });
    searchPage.activeFilters().should("contain", "XC60");
    cy.url().should("include", "https://saka.fi/en/search?q=volvo&model=XC60");
    searchPage.car1().should("be.visible").and("contain", "Volvo XC60");
    //searchPage.filterVechicelType().click({ force: true });
  });

  it("The user can removed selected filters", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchInput().type("volvo{enter}");
    searchPage.filterModel().click({ force: true });
    searchPage.modelList().contains("XC60").click({ force: true });
    searchPage.activeFilters().should("contain", "XC60");
    cy.url().should("include", "https://saka.fi/en/search?q=volvo&model=XC60");
    searchPage.car1().should("be.visible").and("contain", "Volvo XC60");
    searchPage.clearAllBtn().should("be.visible").click({ force: true });
    searchPage.clearAllBtn().should("not.exist");
    cy.url().should("be.equal", "https://saka.fi/en/search?q=volvo");
  });
});
