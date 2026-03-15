describe("Home Page", () => {
  beforeEach(() => {
    const visitOptions = {
      headers: {
        'x-cypress-mock': 'true', // Tell Next.js to use mock data
      },
    };
    cy.visit("/", visitOptions);
  });

  it("navigates to Testimonials page", () => {
    cy.contains("Testimonials").click()
    cy.url().should("include", "/testimonials")
  })

  it('display the years of experience', () => {
    cy.get('.container').contains('12+ Years').should('be.visible');
  });

  it('display the services', () => {
    cy.get('section').contains('Areas of Expertise').scrollIntoView();
    cy.contains('Civil Design').should('be.visible');
    cy.contains('Design work').should('be.visible');
  });

  it('display the projects', () => {
    cy.get('section').contains('Featured Projects').scrollIntoView();
    cy.contains('Metro Station').should('be.visible');
    cy.contains('London').should('be.visible');
  });

  it("should display the footer with correct contact info", () => {
    cy.get('footer').within(() => {
      cy.get('a[href^="tel:"]').should('exist');
      cy.contains('07741304657').should('be.visible');
      cy.contains('11 Marshstreet North').should('be.visible');
    });
  });

})