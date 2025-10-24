/// <reference types="cypress"/>

import { CategoryPage } from "./page_objects/categoryPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { SearchPage } from "./page_objects/searchPage";

var homePage = new HomePage();
var navigationMenu = new NavigationMenu();
var categoryPage = new CategoryPage();
var searchPage = new SearchPage();

beforeEach(() => {
  cy.acceptCookiesBySetting();
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

describe("Smoke test for Category page.", () => {
  it("Verify that user can navigate from Homepage to Diesel cars category ", () => {
    navigationMenu.carsForSale2().click();
    navigationMenu.dieselCars().click({ force: true });
    cy.url().should("be.equal", "https://saka.fi/en/diesel-cars");
  });

  it("Verify that user can navigate from the category page to a car page ", () => {
    cy.url().should("be.equal", "https://saka.fi/en/diesel-cars");
    categoryPage.car1().click({ force: true });
    cy.url().should("contain", "https://saka.fi/en/cars/");
  });

  it("Verify content of the category page", () => {
    // categoryPage.heroBanner().should("be.visible");
    // categoryPage.heroBannerDesc().should("be.visible");
    // categoryPage.heroBannerTitle().should("be.visible");
    // categoryPage.heroBannerTitle().should("contain", "DIESEL CARS");
    // categoryPage
    //   .heroBannerDesc()
    //   .should(
    //     "contain",
    //     "A diesel car is an economical and efficient choice for those who drive a lot. The diesel engine produces more power with less fuel, making it an excellent workhorse for towing, for example, a caravan. When long distances can be covered on a single tank, you don't need to stop at the gas station very often."
    //   );

    cy.prompt([
      "Verify that hero banner is visible",
      "Verify that hero banner has descripton",
      "Verify that hero banner has title",
      "Verify that hero banner has text Diesel",
      "Hero banner should contain text: A diesel car is an economical and efficient choice for those who drive a lot.",
    ]);
  });

  it("Verify that search result counter is visble", () => {
    categoryPage.carCounter().should("be.visible");
  });

  it("Verify that category page filters are visble", () => {
    categoryPage.filters().should("be.visible");
  });

  it.only("Verify sorting options", () => {
    categoryPage
      .sorting()
      .should("be.visible")
      .and("have.attr", "aria-expanded", "false");
    categoryPage.sorting().click({ force: true });
    categoryPage.sorting().should("have.attr", "aria-expanded", "true");
    categoryPage.sortingList().should("be.visible");
  });

  it("Verify pagination of the search result page", () => {
    cy.scrollTo("bottom");
    categoryPage.pagination().should("be.visible").and("contain", "1");
  });

  it("Verify that user can navigate to next page of the search results", () => {
    categoryPage.nextPage().click({ force: true });
    cy.wait(2000);
    categoryPage.pagination().should("be.visible").and("contain", "2");
    cy.url().should("be.equal", "https://saka.fi/en/diesel-cars?page=2");
  });

  it("Verify car cards on the category page", () => {
    categoryPage.car1Diesel().should("be.visible").and("contain", "Diesel");
    categoryPage.car1Image().should("be.visible");
    categoryPage.car4Price().should("be.visible");
    categoryPage.car4Accessories().should("be.visible");
    categoryPage.car4CompareBtn().should("be.visible");
    categoryPage.car4CallBtn().should("be.visible");
    categoryPage.car4MessageBtn().should("be.visible");
  });

  // it("Verify filtering of the category page", () => {
  //   cy.get(".grid .m-0").each(($el, index, $list) => {
  //     cy.log("Index " + index + ":" + $el.text());
  //   });
  // });

  it("Verify filtering of the category page", () => {
    cy.get(".grid .m-0").each(($el) => {
      const car = $el.text();

      if (car.includes("Mercedes")) {
        cy.wrap($el).click({ force: true });
      }
    });
  });

  it("Verify filtering of the category page", () => {
    cy.get(".grid .m-0").as("aliasTest");

    cy.get("@aliasTest").each(($el) => {
      const car = $el.text();

      if (car.includes("Mercedes")) {
        cy.wrap($el).click({ force: true });
      }
    });
  });

  it("Verify filtering of the category page", () => {
    searchPage.filterModel().click({ force: true });
    searchPage.modelList().contains("V90").click({ force: true });
    searchPage.activeFilters().should("contain", "V90");
    cy.url().should("include", "https://saka.fi/en/diesel-cars?model=V90");
    searchPage.car1().should("be.visible").and("contain", "Volvo V90");
  });

  it("The user can removed selected filters", () => {
    searchPage.filterModel().click({ force: true });
    searchPage.modelList().contains("V90").click({ force: true });
    searchPage.activeFilters().should("contain", "V90");
    cy.url().should("include", "https://saka.fi/en/diesel-cars?model=V90");
    searchPage.car1().should("be.visible").and("contain", "Volvo V90");
    searchPage.clearAllBtn().should("be.visible").click({ force: true });
    searchPage.clearAllBtn().should("not.exist");
    cy.url().should("be.equal", "https://saka.fi/en/diesel-cars");
  });
});
