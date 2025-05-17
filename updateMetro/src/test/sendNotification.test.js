
const notify = require('../sendNotification');

describe("Send Notification", () => {
  test("Pass: valid booking message", () => {
    expect(notify({ type: "booking", message: "Confirmed" }))
      .toBe("Notification shown: Booking Confirmed");
  });

  test("Fail: unknown type", () => {
    expect(notify({ type: "unknown", message: "Test" }))
      .toBe("Notification shown: Booking Confirmed");
  });
});
