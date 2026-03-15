describe("Contact Page", () => {
  beforeEach(() => {
    const visitOptions = {
      headers: {
        "x-cypress-mock": "true", // Tell Next.js to use mock data
      },
    };
    cy.visit("/contact", visitOptions);
  });

  it("should display the contact sidebar with details", () => {
    cy.contains("07741304657").should("be.visible");
    cy.contains("thumbengineeringconstruction@yahoo.com").should("be.visible");
    cy.contains("11 Marshstreet North").should("be.visible");
  });

  it(" show validation errors when fields are empty", () => {
    cy.get('button').contains(/send message/i).click();

   cy.contains(/Name is required/i).should("be.visible");
    cy.contains(/Valid Email is required/i).should("be.visible");
    cy.contains(/Query is required/i).should("be.visible");
  });

  it("should submit the form successfully and show success toast", () => {
    cy.intercept("POST", "/api/contact-us", {
        statusCode: 200,
        body: {
          success: true,
          result: { message: "Thank you for contacting us!" },
        },
      }).as("submitContactForm");
    cy.get('input[id*="name"], label:contains("Name") + input').type("John Doe");
    cy.get('input[type="email"]').type("john@example.com");
    cy.get('input[id*="phone"]').type("1234567890");
    cy.get('input[id*="subject"]').type("Project Inquiry");
    cy.get('textarea').type("I am interested in a construction project.");

    cy.get('button').contains(/send message/i).click();

     cy.wait('@submitContactForm');

    cy.contains("Message sent!").should("be.visible");
  });

  it("should handle API failure", () => {
    cy.intercept('POST', '/api/contact-us', {
      statusCode: 500,
      body: { success: false, message: "Something went wrong" }
    }).as('failedSubmit');

    // Fill minimum required fields
    cy.get('input[id*="name"]').type("John Doe");
    cy.get('input[type="email"]').type("john@example.com");
    cy.get('input[id*="phone"]').type("1234567890");
    cy.get('input[id*="subject"]').type("Test");
    cy.get('textarea').type("Test message");

    cy.get('button').contains(/send message/i).click();

    cy.wait('@failedSubmit');
    
    // Verify error toast
    cy.contains("Error").should("be.visible");
    cy.contains("Something went wrong").should("be.visible");
  });
});