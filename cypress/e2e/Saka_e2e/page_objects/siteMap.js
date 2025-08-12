export class SiteMap {
  description() {
    return cy.get('head > meta[name="description"]');
  }

  robots() {
    return cy.get('head > meta[name="robots"]');
  }

  canonical() {
    return cy.get('head > link[rel="canonical"]');
  }
}
