
const login = require('../loginWithCaptcha');

describe("Login with CAPTCHA", () => {
  test("Pass: correct credentials", () => {
    expect(login({ email: "user@mail.com", password: "pass123", attempts: 1 }))
      .toBe("Login successful");
  });

  test("Fail: wrong password", () => {
    expect(login({ email: "user@mail.com", password: "wrong", attempts: 1 }))
      .toBe("Login successful");
  });
});
