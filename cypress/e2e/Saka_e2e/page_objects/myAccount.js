export class MyAccount {
  verifyMySakapageUrl() {
    cy.url().should("be.equal", "https://saka.fi/fi/oma-saka");
  }

  welcomeBanner() {
    return cy.get(".-mb-16 > .relative > .h-full");
  }

  welcomeText() {
    return cy.get(".mb-2 > .text-center");
  }

  dashboardBtn() {
    return cy.get(".\\!bg-neutral-black > .border-primary-400");
  }

  myCarsBtn() {
    return cy.get(
      ":nth-child(1) > .flex-col > :nth-child(2) > .border-primary-400"
    );
  }

  favouriteCarsBtn() {
    return cy.get(":nth-child(3) > .border-primary-400");
  }

  myProfileBtn() {
    return cy.get(":nth-child(4) > .border-primary-400");
  }

  offersBtn() {
    return cy.get(":nth-child(5) > .border-primary-400");
  }

  //DASHBOARD CONTEN

  myPages() {
    return cy.get(".mb-6");
  }

  yourOffers() {
    return cy.get(":nth-child(1) > .my-4 > .mb-0");
  }

  yourFavCars() {
    return cy.get(":nth-child(3) > .my-4 > .mb-0");
  }

  ourArticles() {
    return cy.get(".my-0");
  }

  favouriteCar1() {
    return cy.get(".md\\:flex-row > :nth-child(1) > .gap-4 > :nth-child(1)");
  }

  favouriteCar2() {
    return cy.get(".md\\:flex-row > :nth-child(1) > .gap-4 > :nth-child(2)");
  }

  favouriteCarA() {
    return cy.get('a[class="border-primary-400 hover:text-primary-500"]');
  }

  article1() {
    return cy.get(".md\\:pb-2 > :nth-child(1) > .relative > .absolute");
  }

  article2() {
    return cy.get(":nth-child(2) > .relative > .absolute");
  }

  //MY CARS

  myCarsTitle() {
    return cy.get(".my-8");
  }

  myCar1() {
    return cy.get(":nth-child(2) > section > .gap-4 > :nth-child(1)");
  }

  myCar2() {
    return cy.get(":nth-child(2) > section > .gap-4 > :nth-child(2)");
  }

  addCarBtn() {
    return cy.get(".overflow-hidden > .top-0");
  }

  addCar() {
    return cy.get(".top-0 > .flex");
  }

  fields() {
    return cy.get(".space-y-2");
  }

  //FAVOURITE CARS
  myFavCarsTitle() {
    return cy.get(".my-8");
  }

  addImage() {
    return cy.contains("Lisää kuva autostasi");
  }

  myFavCar1() {
    return cy.get(":nth-child(2) > :nth-child(2) > .gap-4 > :nth-child(1)");
  }

  myFavCar2() {
    return cy.get(":nth-child(2) > :nth-child(2) > .gap-4 > :nth-child(2)");
  }

  recommendedCarsTitle() {
    return cy.get(".py-4 > .flex.items-center > .text-lg");
  }

  addCarForm() {
    return cy.get(".space-y-6");
  }

  recommendedCar1() {
    return cy.get(".md\\:pb-2 > :nth-child(1) > .rounded-2xl");
  }

  recommendedCarsNavigation() {
    return cy.get(".py-4 > .items-center > .border-primary-400");
  }
  //MY PROFILE
  myProfileTitle() {
    return cy.get(".mb-8");
  }

  firstName() {
    return cy.get(".grid > :nth-child(1) > .space-y-2");
  }

  lastName() {
    return cy.get(":nth-child(2) > .space-y-2");
  }

  phoneNumber() {
    return cy.get(":nth-child(3) > .space-y-2");
  }

  email() {
    return cy.get(".grid > :nth-child(4)");
  }

  editProfileBtn() {
    return cy.get(":nth-child(4) > .h-12");
  }

  //OFFERS

  offersTitle() {
    return cy.get(".mb-4");
  }

  offersContent() {
    return cy.get(".grid-cols-12");
  }

  myAccoutIcon() {
    return cy.get(".flex-shrink").contains("Oma Saka");
  }
}
