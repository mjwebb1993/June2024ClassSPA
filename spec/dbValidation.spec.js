import Pizza from "../server/models/Pizza.js";

describe("dbValidation", function() {
  it("should require a customer", async function() {
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
});

it("should require a size", async function() {
  // create a new local Pizza object with no size
  const pizza = new Pizza({ customer: "John Doe" });

  // try block to "await" the result of "try" to "validate" "pizza"
  try {
    await pizza.validate();
    // "catch" the error as "err" and assert that an error WAS thrown
  } catch (err) {
    // because the expect is that there IS an error, an error here produces a passing result
    expect(err.errors.crust).toBeDefined();
  }
});
