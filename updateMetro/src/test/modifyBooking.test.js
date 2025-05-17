
const modifyBooking = require('../modifyBooking');

describe("Modify Booking", () => {
  test("Pass: valid input", () => {
    expect(modifyBooking({ price: "150", email: "user@mail.com" }))
      .toBe("Booking modified successfully");
  });

  test("Fail: negative price", () => {
    expect(modifyBooking({ price: "-10", email: "user@mail.com" }))
      .toBe("Error: Price too low");
  });
});
