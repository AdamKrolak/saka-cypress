/// <reference types="cypress"/>

import { HomePage } from "./page_objects/homePage";
import { LoginPage } from "./page_objects/loginPage";
import { NavigationMenu } from "./page_objects/navigationMenu";
import { RegistrationPage } from "./page_objects/registrationPage";
import { SearchSuggestions } from "./page_objects/searchSuggestion";

var homePage = new HomePage();
var navigationMenu = new NavigationMenu();
var loginPage = new LoginPage();
var searchSuggestions = new SearchSuggestions();
var registrationPage = new RegistrationPage();

beforeEach(() => {
  cy.acceptCookiesBySetting();
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
});

//test
describe("Smoke test for Homepage.", () => {
  it("Verify that navigation menu is visible. Validate logo, icons and sections ", () => {
    navigationMenu.navMenu().should("be.visible");
    navigationMenu.mySakaIcon().should("exist");
    navigationMenu.searchIcon().should("be.visible");
    navigationMenu.langFlag().should("be.visible");
    navigationMenu.carsForSale2().should("be.visible");
    navigationMenu.sellYourCar().should("be.visible");
    navigationMenu.productsNServices().should("be.visible");
    navigationMenu.articles().should("be.visible");
    navigationMenu.salesLocation().should("be.visible");
    navigationMenu.comapny().should("be.visible");
    navigationMenu.logo().should("be.visible");
  });

  it("Verify that user can switch language of the website", () => {
    navigationMenu.langFlag().click({ force: true });
    navigationMenu.langDropdowm().should("be.visible");
    navigationMenu.fiFlag().should("be.visible");
    navigationMenu.svFlag().should("be.visible");
    navigationMenu.fiFlag().click({ force: true });
    cy.url().should("be.equal", "https://saka.fi/fi");
  });

  it("Verify that navigation dropdowns ", () => {
    navigationMenu.carsForSale2().click({ force: true });
    navigationMenu.carsForSaleDrop().should("be.visible");
    navigationMenu.sellYourCar().should("be.visible");
    navigationMenu.productsNServices().should("be.visible");
    navigationMenu.articles().should("be.visible");
    navigationMenu.salesLocation().should("be.visible");
    navigationMenu.comapny().should("be.visible");
    navigationMenu.logo().should("be.visible");
  });

  it("Verify that user can navigate from Homepage to My Account", () => {
    homePage.verifyHomepageUrl();
    navigationMenu.mySakaIcon().click({ force: true });
    homePage.loginDropdown().should("be.visible");
    cy.wait(2000);
    navigationMenu.signIn().click();
    loginPage.verifyLoginpageUrl();
  });

  it("Verify that user can navigate from Homepage to Registration page", () => {
    homePage.verifyHomepageUrl();
    navigationMenu.mySakaIcon().click({ force: true });
    homePage.loginDropdown().should("be.visible");
    cy.wait(2000);
    navigationMenu.signUp().click();
    registrationPage.verifyRegPageUrl();
  });

  it("Verify that hero banner and title are visible", () => {
    homePage.heroBanner().should("be.visible");
    homePage
      .titleBanner()
      .should("be.visible")
      .and("contain", "FINLAND'S LARGEST USED CAR DEALER");
  });

  it("Verify that Latest cars sections is displayed and user can navigate from Homepage to PDP - Latest Cars", () => {
    cy.scrollTo(0, 500);
    //homePage.latestCarTitle().should("be.visible");
    homePage.homePageTop().contains("Latest Cars").should("be.visible");
    homePage
      .latestCar1()
      .should("be.visible")
      .find(".m-0")
      .click({ force: true });
    cy.url().should("contain", "https://saka.fi/en/cars/");
  });

  it("Verify that Electric cars sections is displayed and user can navigate from Homepage to PDP - Electric Cars", () => {
    cy.scrollTo(0, 1000);
    //homePage.electricCarTitle().should("be.visible");
    homePage.homePageMid().contains("Electric cars").should("be.visible");
    homePage
      .electricCar1()
      .should("be.visible")
      .find(".m-0")
      .click({ force: true });
    cy.url().should("contain", "https://saka.fi/en/cars/");
  });

  it("Verify that Falimy cars sections is displayed and user can navigate from Homepage to PDP - Family Cars", () => {
    cy.scrollTo(0, 1500);
    //homePage.famillyCarTitle().should("be.visible");
    homePage.homePageMid().contains("Family cars").should("be.visible");
    homePage.homePageMid().contains("Electric cars").should("be.visible");
    homePage
      .famillyCar2()
      .should("be.visible")
      .find(".border-primary-400")
      .click({ force: true });
    cy.url().should("contain", "https://saka.fi/en/cars/");
  });

  it("Verify that user can display search suggestions", () => {
    navigationMenu.searchIcon().click();
    searchSuggestions.searchSuggestions().should("be.visible");
  });

  it("Verify that services support section is displayed", () => {
    cy.scrollTo(0, 3000);
    homePage
      .serviceSupport()
      .should("be.visible")
      .and("contain", "Our services supporting your purchase");
    homePage.serviceSupportArt().should("be.visible");
  });

  it("Verify that articles section is displayed", () => {
    cy.scrollTo(0, 3000);
    homePage
      .articleSection()
      .scrollIntoView()
      .should("be.visible")
      .and("contain", "Our articles for you");
    homePage.article1().should("be.visible");
  });

  // it("Verify that Pre-footer section with a content is visble", () => {
  //   cy.scrollTo(0, 4000);
  //   homePage
  //     .prefooter()
  //     .should("be.visible")
  //     .and("contain", "High-Quality Used Cars from Saka");
  //   homePage.prefooterBanner().should("be.visible");
  // });

  it("Verify that footer is visible and contains logo and 4 columns, validate titles of the columns", () => {
    cy.scrollTo("bottom");
    homePage.footer().should("be.visible");
    homePage.footerLogo().should("be.visible");
    homePage.followUs().should("be.visible").and("contain", "Follow us");
    homePage
      .carCategoriesFooter()
      .should("be.visible")
      .and("contain", "Car categories");
    homePage
      .productNserviceces()
      .should("be.visible")
      .and("contain", "Products & Services");
    homePage.comapny().should("be.visible").and("contain", "Company");
  });

  it("Verify that newsleter is visible and check newsletter sign-up confirmation message displays", () => {
    cy.scrollTo("bottom");
    homePage.newsletter().should("be.visible");
    homePage.newsletter().click().type("test@email.com");
    homePage.newsletterBtn().click({ force: true });
    homePage.newsletterMsg().should("be.visible");
  });

  it("Verify social media links", () => {
    cy.scrollTo("bottom");
    homePage
      .facebook()
      .should("be.visible")
      .should("have.attr", "href", "https://fi-fi.facebook.com/SakaFinlandOy/");

    homePage
      .instagram()
      .should("be.visible")
      .should("have.attr", "href", "https://www.instagram.com/saka.fi/");
    homePage
      .tiktok()
      .should("be.visible")
      .should("have.attr", "href", "https://www.tiktok.com/@saka.fi");
    homePage
      .linkedIn()
      .should("be.visible")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/suomenautokauppa/"
      );
    homePage
      .youtube()
      .should("be.visible")
      .should("have.attr", "href", "https://www.youtube.com/@saka4810");
  });

  it("Verify that user can switch between the dark/light mode", () => {
    homePage
      .html()
      .should("have.attr", "style", "color-scheme: light; --sf-vh: 7.2px;");
    navigationMenu.mySakaIcon().click({ force: true });
    navigationMenu.modeSwitcher().should("be.visible").click({ force: true });
    homePage
      .html()
      .should("have.attr", "style", "color-scheme: dark; --sf-vh: 7.2px;");
  });

  it("Verify that user can switch a language of the website", () => {
    homePage.html().should("have.attr", "lang", "en");
    navigationMenu.mySakaIcon().click({ force: true });
    navigationMenu.langFlag().should("be.visible").click({ force: true });
    navigationMenu.fiFlag().click({ force: true });
    homePage.html().should("have.attr", "lang", "fi");
  });
});
