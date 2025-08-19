/// <reference types = "cypress" />
import { CategoryPage } from "./page_objects/categoryPage";
import { HomePage } from "./page_objects/homePage";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { SearchPage } from "./page_objects/searchPage";
import { SearchSuggestions } from "./page_objects/searchSuggestion";
import { SiteMap } from "./page_objects/siteMap";
var homePage = new HomePage();
var siteMap = new SiteMap();
var categoryPage = new CategoryPage();
var navigationMenu = new NavigationMenu();
var searchSuggestions = new SearchSuggestions();
var searchPage = new SearchPage();

describe("Sitemap Validation", () => {
  it("Validate that sitemap for cars, articles and static is available", () => {
    // Request the sitemap URL
    cy.request("https://saka.fi/sitemap.xml").then((response) => {
      // Ensure the response status is 200
      expect(response.status).to.eq(200);

      // Parse the XML response
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.body, "application/xml");

      // Get all <loc> elements in the sitemap
      const locElements = xmlDoc.getElementsByTagName("loc");
      const links = Array.from(locElements).map((el) => el.textContent);

      const carsMap = links.filter((link) =>
        link.startsWith("https://saka.fi/sitemaps/cars/")
      );

      // Assert there are at least 4 matching cars links
      expect(carsMap.length).to.be.gte(
        4,
        `Sitemap should contain at least 4 links starting with https://saka.fi/sitemaps/cars/`
      );

      const articleMap = links.filter((link) =>
        link.startsWith("https://saka.fi/sitemaps/articles/sitemap/0.xml")
      );

      // Assert there is 1 matching link for articles
      expect(articleMap.length).to.be.gte(
        1,
        `Sitemap should contain 1 link starting with https://saka.fi/sitemaps/articles/sitemap/0.xml`
      );

      const staticMap = links.filter((link) =>
        link.startsWith("https://saka.fi/sitemaps/static/sitemap.xml")
      );

      // Assert there is 1 matching link for static
      expect(staticMap.length).to.be.gte(
        1,
        `Sitemap should contain 1 link starting with https://saka.fi/sitemaps/static/sitemap.xml`
      );
    });
  });
  it("Validate that sitemap cotnains links for all cars", () => {
    // Request the sitemap URL
    cy.request("https://saka.fi/sitemaps/cars/sitemap/3.xml").then(
      (response) => {
        // Ensure the response status is 200
        expect(response.status).to.eq(200);

        // Parse the XML response
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.body, "application/xml");

        // Get all <loc> elements in the sitemap
        const locElements = xmlDoc.getElementsByTagName("loc");
        const links = Array.from(locElements).map((el) => el.textContent);

        const carsMap = links.filter((link) =>
          link.startsWith("https://saka.fi/fi/vaihtoauto/")
        );

        // Assert there are at least 500 matching product links
        expect(carsMap.length).to.be.gte(
          500,
          `Sitemap should contain 500 links starting with https://saka.fi/sitemaps/cars/`
        );
      }
    );
  });
  describe("Meta tags validation", () => {
    it("Verify that meta tags cotain all needed data", () => {
      cy.visit("/");
      //homePage.acceptAllCookies();
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes("fbq is not defined") ||
          err.message.includes("Cannot read properties of undefined")
        ) {
          return false; // prevents Cypress from failing the test
        }
      });
      cy.title().should(
        "include",
        "See our selection of over 4150 trade-in cars"
      );

      siteMap
        .description()
        .should("have.attr", "content")
        .and(
          "include",
          "Find your perfect car from Saka's selection of over 4,150 trade-in cars with convenient search. We will deliver the car to your home free of charge."
        );

      siteMap
        .robots()
        .should("have.attr", "content")
        .and("eq", "index, follow");

      siteMap
        .canonical()
        .should("have.attr", "href")
        .and("eq", "https://saka.fi/en");

      // cy.document().should("have.property", "name").eq(0);
    });
  });

  describe("Check pageInfo event in dataLayer", () => {
    it.skip("Validate that dataLayer contains all need data for GA", () => {
      cy.visit("/");
      // homePage.acceptAllCookies();
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes("fbq is not defined") ||
          err.message.includes("Cannot read properties of undefined")
        ) {
          return false; // prevents Cypress from failing the test
        }
      });

      cy.visit("diesel-cars");
      categoryPage.car4().click({ force: true });
      cy.wait(2000);
      cy.window().should("have.property", "dataLayer");
      cy.window().then((win) => {
        const pageInfoEvent = win.dataLayer.find((e) => e.event === "pageInfo");
        expect(pageInfoEvent, "pageInfo event exists").to.exist;
        expect(pageInfoEvent).to.exist;
        //expect(pageInfoEvent.contentId).to.eq("BMW-520-330541");
        expect(pageInfoEvent.manufacturer).to.exist;
        expect(pageInfoEvent.bodyType).to.exist;
        expect(pageInfoEvent.model).to.exist;
        expect(pageInfoEvent.price).to.exist;
        expect(pageInfoEvent.fuelType).to.eq("Diesel");
        expect(pageInfoEvent.gearType).to.exist;
        expect(pageInfoEvent.mileage).to.exist;
        expect(pageInfoEvent.isCarPage).to.exist;
        expect(pageInfoEvent.registerNumber).to.exist;
      });
    });
    it.skip("Verify events triggered when user navigates from search page to car page", () => {
      cy.visit("/");
      //homePage.acceptAllCookies();
      Cypress.on("uncaught:exception", (err) => {
        if (
          err.message.includes("fbq is not defined") ||
          err.message.includes("Cannot read properties of undefined")
        ) {
          return false; // prevents Cypress from failing the test
        }
      });
      navigationMenu.searchIcon().click();
      searchSuggestions.searchInput().type("volvo{enter}");
      searchPage.car1().should("be.visible").and("contain", "Volvo");
      categoryPage.car4().click({ force: true });
      cy.wait(2000);
      cy.window().should("have.property", "dataLayer");
      cy.window().then((win) => {
        const pageInfoEvent = win.dataLayer.find((e) => e.event === "pageInfo");
        expect(pageInfoEvent, "pageInfo event exists").to.exist;
        expect(pageInfoEvent).to.exist;
        expect(pageInfoEvent.contentId).to.include("Volvo");
        expect(pageInfoEvent.manufacturer).to.eq("Volvo");
        expect(pageInfoEvent.bodyType).to.exist;
        expect(pageInfoEvent.model).to.exist;
        expect(pageInfoEvent.price).to.exist;
        expect(pageInfoEvent.fuelType).to.exist;
        expect(pageInfoEvent.gearType).to.exist;
        expect(pageInfoEvent.mileage).to.exist;
        expect(pageInfoEvent.isCarPage).to.exist;
        expect(pageInfoEvent.registerNumber).to.exist;
      });
    });
  });
});

// describe("Sitemap Link Check", () => {
//   it.only("should not have any links returning 404 from the sitemap", () => {
//     const sitemapUrl = "https://saka.fi/sitemaps/cars/sitemap/3.xml"; // Replace with your real sitemap

//     cy.request(sitemapUrl).then((response) => {
//       expect(response.status).to.eq(200);

//       const parser = new DOMParser();
//       const xmlDoc = parser.parseFromString(response.body, "text/xml");
//       const locElements = xmlDoc.getElementsByTagName("loc");

//       const urls = Array.from(locElements).map((el) => el.textContent);

//       urls.forEach((url) => {
//         cy.request({
//           url,
//           failOnStatusCode: false,
//         }).then((resp) => {
//           expect(resp.status, `Broken link: ${url}`).to.not.eq(404);
//         });
//       });
//     });
//   });
// });
