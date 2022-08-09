describe("Health", () => {
  it("should successfully render ping result", () => {
    cy.visit("http://localhost:3000/health")

    cy.get("#load").contains("Loading...").should("be.visible")

    cy.wait(100)

    cy.get("#result").contains("pong").should("be.visible")
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
