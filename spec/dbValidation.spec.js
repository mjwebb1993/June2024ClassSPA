import Pizza from "../server/models/Pizza.js";

describe("Pizza model", function() {
  it("should fail validation with no customer", async function() {
    // create a new local Pizza object with no data
    const pizza = new Pizza();

    // try block to "await" the result of "try" to "validate" "pizza"
    try {
      await pizza.validate();
      // "catch" the error as "err" and assert that an error WAS thrown
    } catch (err) {
      // because the expect is that there IS an error, an error here produces a passing result
      expect(err.errors.customer).toBeDefined();
    }
  });

  it("should require a appropriate fields", async function() {
    // create a new local Pizza object with no size
    const pizza = new Pizza({
      customer: "John Doe",
      crust: "thin",
      sauce: "Marinara"
    });

    // try block to "await" the result of "try" to "validate" "pizza"
    try {
      await pizza.validate();

      expect(pizza.customer).toBe("John Doe");
      expect(pizza.crust).toBe("thin");
      expect(pizza.sauce).toBe("Marinara");
      // "catch" the error as "err" and assert that an error WAS thrown
    } catch (err) {
      console.log(err);
    }
  });

});
