export class SearchSuggestions {
  verifyMySakapageUrl() {
    cy.url().should("be.equal", "https://saka.fi/en/my-saka");
  }

  searchSuggestions() {
    return cy.get(".flex-shrink");
  }

  searchInput() {
    return cy.get("#_R_mecl6ivb_");
  }

  searchSugCarTitle1() {
    return cy.get(".-ml-3 > :nth-child(1) > .overflow-hidden");
  }
}
