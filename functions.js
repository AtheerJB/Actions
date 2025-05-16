function modifyBooking(price, email) {
  if (!price || !email) return "Error: Missing data";
  if (price < 10 || price > 500) return "Error: Invalid price";
  return "Booking modified";
}

function login(email, password, attempts, captchaPassed) {
  if (attempts >= 3 && !captchaPassed) return "CAPTCHA required";
  if (email === "user@mail.com" && password === "1234") return "Login success";
  return "Login failed";
}

function processPayment(method) {
  if (method === "visa") return "Payment successful";
  return "Error: invalid method";
}

function sendNotification(type, message) {
  if (!message) return "Error: Empty message";
  if (message.length > 150) return "Error: Message too long";
  if (!["booking", "cancel"].includes(type)) return "Error: Invalid type";
  return "Notification sent";
}

module.exports = { modifyBooking, login, processPayment, sendNotification };
