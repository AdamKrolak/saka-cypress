export class NavigationMenu {
  mySakaIcon() {
    return cy.get(".flex-shrink").find("button").contains("My Saka");
  }
  loginDropdown() {
    return cy.get("div[data-radix-popper-content-wrapper]");
  }

  navMenu() {
    return cy.get(".\\!w-full");
  }
  signIn() {
    return cy.get("div[data-radix-popper-content-wrapper]").contains("Sign in");
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
    return cy.get("#radix-_R_2cl6ivb_-content-radix-_R_pecl6ivb_");
  }

  langFlag() {
    return cy.get(".flex-shrink").find("img");
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
    return cy.get("div[data-radix-popper-content-wrapper]").contains("Sign up");
  }

  langDropdowm() {
    return cy.get("div[data-radix-popper-content-wrapper]");
  }

  fiFlag() {
    return cy
      .get("div[data-radix-popper-content-wrapper]")
      .find('img[alt="Switch to FI"]');
  }

  svFlag() {
    return cy
      .get("div[data-radix-popper-content-wrapper]")
      .find('img[alt="Switch to SV"]');
  }

  enFlag() {
    return cy.get("#radix-\\:r11\\: > :nth-child(1)");
  }
}
