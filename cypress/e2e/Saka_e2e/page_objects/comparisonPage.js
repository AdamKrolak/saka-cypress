export class ComparisonPage {
  compareCar1Cat() {
    return cy.get(
      ":nth-child(1) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  compareCar2Cat() {
    return cy.get(
      ":nth-child(3) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  compareCar3Cat() {
    return cy.get(
      ":nth-child(4) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }
  compareCar4Cat() {
    return cy.get(
      ":nth-child(5) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  compareCar5Cat() {
    return cy.get(
      ":nth-child(6) > .\\[\\.border-t\\]\\:pt-6 > .flex > .w-auto"
    );
  }

  comparisonSidebar() {
    return cy.get(".bg-background\\/80");
  }

  sidebarCar1() {
    return cy.get(".mb-4 > .items-center");
  }

  sidebarCar31() {
    return cy.get(".mb-4 > :nth-child(1)");
  }
  sidebarCar32() {
    return cy.get(".mb-4 > :nth-child(2)");
  }

  sidebarCar33() {
    return cy.get(".mb-4 > .hidden");
  }

  sidebarMessage() {
    return cy.get(".max-h-screen > .group");
  }

  closeOpenSidebar() {
    return cy.get(".bottom-5 > .flex > .py-2");
  }

  removeCarButton() {
    return cy.contains("Remove");
  }

  goToComparePageBtn() {
    return cy.get(".bg-background\\/80 > .inline-flex");
  }

  title() {
    return cy.get("h1");
  }

  descripiton() {
    return cy.get(".prose-headings\\:text-lg > :nth-child(2)");
  }

  carHeader1() {
    return cy.get(".sticky > .mx-auto > :nth-child(1)");
  }

  carHeader2() {
    return cy.get(".sticky > .mx-auto > :nth-child(2)");
  }
  carHeader3() {
    return cy.get(".mx-auto > .md\\:block");
  }

  price1() {
    return cy.get(
      ".mx-auto > :nth-child(1) > .border-primary-400 > .mt-2 > .text-lg"
    );
  }

  price2() {
    return cy.get(
      ".mx-auto > :nth-child(2) > .border-primary-400 > .mt-2 > .text-lg"
    );
  }

  price3() {
    return cy.get(".md\\:block > .border-primary-400 > .mt-2 > .text-lg");
  }
  carTile1() {
    return cy.get(
      ".xl\\:mt-0 > :nth-child(2) > .justify-between > :nth-child(1)"
    );
  }

  carTile2() {
    return cy.get(
      ".xl\\:mt-0 > :nth-child(2) > .justify-between > :nth-child(2)"
    );
  }
  carTile3() {
    return cy.get(".relative.hidden");
  }
}
