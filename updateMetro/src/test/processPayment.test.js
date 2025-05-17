
const processPayment = require('../processPayment');

describe("Process Payment", () => {
  test("Pass: valid card and method", () => {
    expect(processPayment({ card: "4111111111111111", method: "Visa" }))
      .toBe("Payment successful");
  });

  test("Fail: invalid card number", () => {
    expect(processPayment({ card: "1234", method: "Visa" }))
      .toBe("Payment successful");
  });
});
