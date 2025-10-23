{
  /* <reference types="Cypress" />; */
}
<reference types="cypress" />
describe("YouTube Search Automation Slow Mode", () => {
  // it("searches and clicks the first video slowly", () => {
  //   cy.on("uncaught:exception", (err, runnable) => {
  //     if (err.message.includes("ResizeObserver loop")) {
  //       return false; // prevents Cypress from failing the test
  //     }
  //   });
  //   cy.visit("https://www.youtube.com/");
  //   cy.wait(2000); // Wait 2 seconds
  //   cy.log("helo its me ");
  //   cy.get('input[name="search_query"]', { timeout: 10000 }).click();
  //   cy.wait(1000);

  //   cy.get('input[name="search_query"]').type("gingle{enter}");
  //   cy.wait(2000);
  //   cy.log("second log ");

  //   cy.get("ytd-video-renderer", { timeout: 15000 }).should("exist");
  //   cy.wait(1000);

  //   cy.get("ytd-video-renderer").first().find("#video-title").click();
  //   cy.wait(2000);
  //   cy.log("3rd log ");

  //   // cy.url().should("include", "/watch");
  // });
  it("searches and clicks the first video slowly", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message.includes("ResizeObserver loop")) {
        return false; // prevents Cypress from failing the test
      }
    });
    cy.visit("https://www.youtube.com/");
    cy.wait(2000); // Wait 2 seconds
    cy.log("helo its me ");
    cy.get('input[name="search_query"]', { timeout: 10000 }).click();
    cy.wait(1000);

    cy.get('input[name="search_query"]').type("gingle{enter}");
    cy.wait(2000);

    cy.get("ytd-video-renderer", { timeout: 15000 }).should("exist");
    cy.wait(1000);

    cy.get("ytd-video-renderer").first().find("#video-title").click();
    cy.wait(2000);

    cy.url().should("include", "/watch");
  });
});
