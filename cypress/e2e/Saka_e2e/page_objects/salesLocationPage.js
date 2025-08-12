export class SalesLocation {
  verifyLocPageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en/locations");
  }

  pageTitle() {
    return cy.get(".bottom-0 > .m-0");
  }

  map() {
    return cy.get(
      '[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    );
  }

  location1() {
    return cy.get('[aria-label="Express"]');
  }

  location2() {
    return cy.get('[aria-label="Lappeenranta"]');
  }

  location3() {
    return cy.get('[aria-label="Koivuhaka"]');
  }

  locationDropdown() {
    return cy.get("div.md\\:px-4 > .flex");
  }

  locationDropdownList() {
    return cy.get(".p-1");
  }

  firstListLocation() {
    return cy.get(".radix-\\:r24:");
  }

  sendVerificationButton() {
    return cy.get(".space-y-6 > .relative");
  }

  signInGoogleButton() {
    return cy.get(".space-y-6 > .bg-white");
  }

  errorMessage() {
    return cy.get(".max-h-screen > .group");
  }

  location1Name() {
    return cy.get(
      '[aria-label="Pakkala"] > .flex-col > .hover\\:text-foreground > .flex > :nth-child(1)'
    );
  }

  location1Address() {
    return cy.get(
      '[aria-label="Lappeenranta"] > .flex-col > .hover\\:text-foreground > .text-base'
    );
  }

  location1State() {
    return cy.get(
      '[aria-label="Pakkala"] > .flex-col > .hover\\:text-foreground > .flex > .font-bold'
    );
  }

  location1Phone() {
    return cy.get('[aria-label="Lahti"] > .md\\:pb-2 > .gap-2 > p');
  }

  location1CarsBtn() {
    return cy.get('[aria-label="Pakkala"] > .pt-2 > .border-primary-400');
  }

  location1CallBtn() {
    return cy.get('[aria-label="Pakkala"] > .pt-2 > .text-sm');
  }

  locationHyvinkää() {
    return cy.get(".h-fit > .flex.p-4");
  }

  locationMap() {
    return cy.get(".h-\\[300px\\]");
  }

  locationHyvinkääAddress() {
    return cy.get("p.px-4");
  }

  locationaSalespeopleTitle() {
    return cy.get(".my-0");
  }

  locationaSalespeople1() {
    return cy.get(".md\\:pb-2 > :nth-child(1) > .overflow-hidden");
  }

  locationaSalespeople2() {
    return cy.get(".md\\:pb-2 > :nth-child(2) > .overflow-hidden");
  }

  locationDescription() {
    return cy.get(".h-fit > :nth-child(3) > :nth-child(5)");
  }
}
