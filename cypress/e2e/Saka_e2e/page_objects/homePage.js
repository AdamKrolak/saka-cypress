export class HomePage {
  verifyHomepageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en");
  }

  titleBanner() {
    return cy.get("h1");
  }

  heroBanner() {
    return cy.get(".z-1");
  }
  cookieBanner() {
    return cy.get(".ot-sdk-container > .ot-sdk-row");
  }
  acceptAllCookies() {
    return cy
      .get("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
      .click();
  }
  sakaLogo() {
    return cy.get(".ot-sdk-container > .ot-sdk-row");
  }
  chatMessage() {
    return;
  }
  chatIcon() {
    return;
  }
  //Header elements
  header() {
    return;
  }

  searchIcon() {
    return cy.get(".sf-header__icons > .search");
  }

  latestCarTitle() {
    return cy.get(
      '[data-id="top-items"] > :nth-child(3) > .ml-3 > div.relative.w-full > :nth-child(1) > .w-full > .my-0'
    );
  }
  homePageTop() {
    return cy.get('div[data-id="top-items"]');
  }

  homePageMid() {
    return cy.get('div[data-id="async-items"]');
  }

  latestCar1() {
    return cy.get(
      '[data-id="top-items"] > :nth-child(3) > .grid-cols > div.relative.w-full > .-mx-4 > .gap-4 > :nth-child(1) > .rounded-2xl > .flex-1'
    );
  }

  electricCarTitle() {
    return cy.get(
      ":nth-child(1) > .ml-3 > div.relative.w-full > :nth-child(1) > .w-full > .my-0"
    );
  }

  electricCar1() {
    return cy.get(
      ":nth-child(1) > .grid-cols > div.relative.w-full > .-mx-4 > .gap-4 > :nth-child(1) > .rounded-2xl"
    );
  }

  famillyCarTitle() {
    return cy.get(
      ":nth-child(2) > .ml-3 > div.relative.w-full > :nth-child(1) > .w-full > .my-0"
    );
  }
  famillyCar2() {
    return cy.get(
      ":nth-child(2) > .grid-cols > div.relative.w-full > .-mx-4 > .gap-4 > :nth-child(2) > .rounded-2xl"
    );
  }

  serviceSupport() {
    return cy.get(".text-h3");
  }

  serviceSupportArt() {
    return cy.get(":nth-child(1) > .rounded-2xl > :nth-child(1) > .h-full");
  }

  articleSection() {
    return cy.get(
      ':nth-child(5) > .grid-cols > [role="region"] > .flex.justify-between'
    );
  }

  article1() {
    return cy.get(".-mx-4 > .gap-4 > :nth-child(1) > .relative > .z-\\[2\\]");
  }

  prefooter() {
    return cy.get(".min-h-\\[568px\\] > .mx-auto");
  }

  prefooterBanner() {
    return cy.get(".mx-auto > .relative > .object-cover");
  }

  footer() {
    return cy.get(".mb-5");
  }

  footerLogo() {
    return cy.get(".mb-5 > .border-primary-400 > img");
  }

  followUs() {
    return cy.get(".mb-2");
  }
  carCategoriesFooter() {
    return cy.get(":nth-child(2) > .text-lg");
  }

  productNserviceces() {
    return cy.get(":nth-child(3) > .text-lg");
  }

  comapny() {
    return cy.get(":nth-child(4) > .text-lg");
  }

  newsletter() {
    return cy.get("#\\:R1fadfb\\:-form-item > .flex");
  }

  newsletterBtn() {
    return cy.get(".absolute > .inline-flex");
  }

  newsletterMsg() {
    return cy.get(".max-h-screen > .group");
  }

  facebook() {
    return cy.get(
      ':nth-child(1) > .flex-col > [aria-label="Follow us on Facebook"]'
    );
  }

  instagram() {
    return cy.get(
      ':nth-child(1) > .flex-col > [aria-label="Follow us on Instagram"]'
    );
  }

  tiktok() {
    return cy.get(
      ':nth-child(1) > .flex-col > [aria-label="Follow us on TikTok"]'
    );
  }

  linkedIn() {
    return cy.get(
      ':nth-child(1) > .flex-col > [aria-label="Follow us on LinkedIn"]'
    );
  }

  youtube() {
    return cy.get(
      ':nth-child(1) > .flex-col > [aria-label="Follow us on Youtube"]'
    );
  }

  background() {
    return cy.get(".pb-14");
  }

  html() {
    return cy.get(".__variable_897ac5");
  }
}
