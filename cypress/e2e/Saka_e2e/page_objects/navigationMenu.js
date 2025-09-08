export class NavigationMenu {
  mySakaIcon() {
    return cy.get(".pr-4 > .border-primary-400 > img");
  }
  loginDropdown() {
    return cy.get("#radix-\\:rv\\: > :nth-child(1)");
  }

  navMenu() {
    return cy.get(".\\!w-full");
  }
  signIn() {
    return cy.get(
      "#radix-\\:R19mpadfbH1\\: > :nth-child(1) > :nth-child(1) > .border-primary-400"
    );
  }

  logOutBtn() {
    return cy.get(".shadow-xl > .inline-flex");
  }

  searchIcon() {
    return cy.get(".basis-0");
  }

  carsForSale() {
    return cy.get("#radix-\\:R6nadfb\\:-trigger-radix-\\:R35mnadfb\\:");
  }
  carsForSale2() {
    return cy.get(".group\\/list").contains("Cars for Sale");
  }
  dieselCars() {
    return cy.contains("a", "Diesel Cars");
  }

  carsForSaleDrop() {
    return cy.get("#radix-\\:R6padfb\\:-content-radix-\\:R35mpadfb\\: > div");
  }

  langFlag() {
    return cy.get("#radix-_R_2srcl6ivb_ > .rounded-full");
  }
  sellYourCar() {
    return cy.get(".group\\/list").contains("Sell your car");
  }

  modeSwitcher() {
    return cy.get(".right-2 > .cursor-pointer");
  }

  productsNServices() {
    return cy.get(".group\\/list").contains("Products & Services");
  }

  articles() {
    return cy.get(":nth-child(5) > .flex > .nav-link-hover");
  }

  salesLocation() {
    return cy.get(":nth-child(6) > .flex > .nav-link-hover");
  }

  comapny() {
    return cy.get(".group\\/list").contains("Company");
  }
  logo() {
    return cy.get(".pr-4 > .border-primary-400 > img");
  }

  signUp() {
    return cy.get(
      "#radix-\\:R19mpadfbH1\\: > :nth-child(1) > :nth-child(2) > .border-primary-400"
    );
  }

  langDropdowm() {
    return cy.get("#radix-_R_2srcl6ivbH1_");
  }

  fiFlag() {
    return cy.get("#radix-_R_2srcl6ivbH1_ > :nth-child(1) > img");
  }

  svFlag() {
    return cy.get("#radix-_R_2srcl6ivbH1_ > :nth-child(2) > img");
  }

  enFlag() {
    return cy.get("#radix-\\:r11\\: > :nth-child(1)");
  }
}
