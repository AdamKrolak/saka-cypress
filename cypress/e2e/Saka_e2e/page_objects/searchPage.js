export class SearchPage {
  verifyMySakapageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en/my-saka");
  }

  heroBanner() {
    return cy.get(".justify-start > .h-full");
  }

  heroTitle() {
    return cy.get(".mb-2 > .text-center");
  }

  carsCounter() {
    return cy.get(".inline-block");
  }

  filters() {
    return cy.get(":nth-child(2) > .lg\\:block");
  }

  sortingOptions() {
    return cy.get(":nth-child(1) > .flex-row > .flex");
  }

  pagination() {
    return cy.get(".mx-auto > .flex-row > :nth-child(2) > .flex");
  }

  nextPage() {
    return cy.get(":nth-child(3) > .border-primary-400");
  }

  car1() {
    return cy.get(":nth-child(1) > .grid > :nth-child(1)");
  }

  car2() {
    return cy.get(":nth-child(1) > .grid > :nth-child(2)");
  }

  car1Image() {
    return cy.get(
      ":nth-child(1) > .mb-3.flex-col > .border-primary-400 > .relative > .left-0"
    );
  }

  car2Price() {
    return cy.get(":nth-child(2) > .flex-1 > .mt-auto > .flex");
  }

  car2Accessories() {
    return cy.get(":nth-child(2) > .flex-1 > .w-min");
  }

  car2CompareBtn() {
    return cy.get(
      ":nth-child(2) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  car2CallBtn() {
    return cy.get(
      ":nth-child(2) > .\\[\\.border-t\\]\\:pt-6 > .flex > .h-auto"
    );
  }

  car2MessageBtn() {
    return cy.get(
      ":nth-child(2) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-full.h-9"
    );
  }

  filterVechicelType() {
    return cy.get("#Vehicle\\ Type-button");
  }

  filterModel() {
    return cy.get("#Model-button");
  }

  modelList() {
    return cy.get("#Model-list");
  }

  activeFilters() {
    return cy.get(".lg\\:block > .flex-wrap");
  }

  clearAllBtn() {
    return cy.get(".bg-black");
  }
}
