describe("Home page", () => {
  it("abre a página inicial", () => {
    cy.visit("http://localhost:3000");

    cy.contains("SpaceX Portal", { timeout: 10000 })
      .should("be.visible");
  });
});
