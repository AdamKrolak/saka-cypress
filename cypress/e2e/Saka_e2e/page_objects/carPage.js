export class CarPage {
  verifyCarpageUrl() {
    cy.url().should("contain", "/cars/");
  }

  carImage() {
    return cy
      .get('[style="transform: translate3d(0px, 0px, 0px);"]')
      .find(".aspect-\\[1076\\/694\\]");
  }

  firstGallImage() {
    return cy.get(".w-16 > .h-full");
  }

  carName() {
    return cy.get("#car-title");
  }

  carShorDsc() {
    return cy.get(".text-md");
  }

  carPrice() {
    return cy.get(".justify-center > .flex > .text-xl");
  }

  breadcrumbs() {
    return cy.get(".md\\:basis-full > .left-0");
  }

  yearOfMan() {
    return cy.get('[title="Valmistusvuosi"]');
  }

  yearOfManNew() {
    return cy.get('[title="Valmistusvuosi"]');
  }

  mileage() {
    return cy.get(".h-fit > :nth-child(1) > .my-3 > :nth-child(2)");
  }

  type() {
    return cy.get(".my-3 > :nth-child(3)");
  }

  transmission() {
    return cy.get(".my-3 > :nth-child(4)");
  }

  financingBtn() {
    return cy.get("section > div.justify-between > .cursor-pointer");
  }

  financingCalc() {
    return cy.get("#finance-calculator-form");
  }

  fullScreenBtn() {
    return cy.get(".bottom-4");
  }

  fullImage() {
    return cy.get(".h-full");
  }

  minimiseBtn() {
    return cy.get(".lucide-x");
  }
  equAcc() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(1) > .mb-3 > :nth-child(1) > #accordion-header-equipment"
    );
  }

  equAccTitle() {
    return cy.contains("Equipment");
  }

  equAccContent() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(1) > .mb-3 > #accordion-content-equipment > .w-full"
    );
  }

  basicInfoAcc() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(2) > .mb-3 > :nth-child(1) > #accordion-header-basicinformation"
    );
  }

  basicInfoTitle() {
    return cy.contains("Basic Information");
  }

  basicInfoAccCont() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(2) > .mb-3 > :nth-child(1) > #accordion-header-basicinformation > .text-left"
    );
  }

  techInfoAcc() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(3) > .mb-3 > :nth-child(1) > #accordion-header-technicalinformation > .text-left"
    );
  }

  techInfoTitle() {
    return cy.contains("Technical Information");
  }

  techInfoAccCont() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(3) > .mb-3 > #accordion-content-technicalinformation > .grid"
    );
  }

  condRepotAcc() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(4) > .mb-3 > :nth-child(1) > #accordion-header-conditionreport > .text-left"
    );
  }

  condRepotTitle() {
    return cy.contains("Condition Report");
  }

  condRepotAccForm() {
    return cy.get(
      ".md\\:block > :nth-child(1) > :nth-child(4) > .mb-3 > #accordion-content-conditionreport > .rounded-\\[40px\\]"
    );
  }

  relatedCarTitle() {
    return cy.get(":nth-child(1) > .md\\:pl-2 > .py-4 > .gap-5 > .my-0");
  }

  relatedCarSection() {
    return cy.get(".-mx-4");
  }

  relatedCarFirstCar() {
    return cy.get(":nth-child(1) > .rounded-2xl");
  }

  sakaVarma() {
    return cy.get(".mb-6");
  }

  salesPeopleTitle() {
    return cy.get(".w-full > .my-0");
  }

  salesPeopleSection() {
    return cy.get(".md\\:pl-2 > div.relative.w-full > .-mx-4");
  }

  salesPeopleFirst() {
    return cy.get(
      ".md\\:pl-2 > div.relative.w-full > .-mx-4 > .gap-4 > :nth-child(1) > .overflow-hidden > .px-4"
    );
  }
}
