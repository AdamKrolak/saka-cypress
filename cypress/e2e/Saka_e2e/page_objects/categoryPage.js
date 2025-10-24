export class CategoryPage {
  car1() {
    return cy.get(
      ":nth-child(1) > .mb-3.flex-col > .border-primary-400 > .relative > .left-0"
    );
  }

  heroBanner() {
    return cy.get(".z-1");
  }

  heroBannerTitle() {
    return cy.get("h1");
  }

  heroBannerDesc() {
    return cy.get(".z-1 > .mx-auto");
  }

  carCounter() {
    return cy.get(".inline-block");
  }

  pagination() {
    return cy.get(".mx-auto > .flex-row > :nth-child(2) > .flex");
  }

  nextPage() {
    return cy.get(":nth-child(3) > .border-primary-400");
  }

  sorting() {
    //return cy.get(":nth-child(1) > .flex-row > .flex").contains("Sort By")
    return cy.get("button[title='Sort By']");
  }

  sortingList() {
    return cy.get("div[role='listbox']");
  }

  filters() {
    return cy.get(":nth-child(2) > .lg\\:block");
  }

  car1Image() {
    return cy.get(
      ":nth-child(1) > .mb-3.flex-col > .border-primary-400 > .relative > .left-0"
    );
  }

  car4Price() {
    return cy.get(":nth-child(4) > .flex-1 > .mt-auto > .flex");
  }

  car4Accessories() {
    return cy.get(":nth-child(4) > .flex-1 > .w-min");
  }

  car4CompareBtn() {
    return cy.get(
      ":nth-child(4) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  car4CallBtn() {
    return cy.get(
      ":nth-child(4) > .\\[\\.border-t\\]\\:pt-6 > .flex > .h-auto"
    );
  }

  car4MessageBtn() {
    return cy.get(
      ":nth-child(4) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-full.h-9"
    );
  }

  car1Diesel() {
    return cy.get(":nth-child(1) > .flex-1 > .flex-wrap > :nth-child(3)");
  }

  car4() {
    return cy.get(
      ":nth-child(4) > .mb-3.flex-col > .border-primary-400 > .relative > .left-0"
    );
  }

  car6() {
    return cy.get(
      ":nth-child(7) > .mb-3.flex-col > .border-primary-400 > .relative > .left-0"
    );
  }
}
