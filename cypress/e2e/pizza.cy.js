describe("Pizza Ordering", function() {
  it("should allow a user to order a pizza", function() {
    // visit the pizza ordering page
    cy.visit("http://localhost:1234/order");

    // select a crust for the pizza
    cy.get("#crust").select("thin");

    // select a crust for the pizza
    cy.get("#cheese").type("Mozzarella");

    // select toppings for the pizza
    cy.get("#id_of_checkbox1").check(); // Chicken checkbox
    cy.get("#id_of_checkbox2").check(); // Onion checkbox

    // enter a name for the customer
    cy.get("#sauce").type("Marinara");

    // submit the order
    cy.get("input[type=submit]").click();

    // verify that the order was submitted successfully
    cy.get("h1").should("contain", "List All Pizzas");
  });
});
