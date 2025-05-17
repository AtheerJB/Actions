
function sendNotification({ type, message }) {
  if (!message) return "Error: Notification content missing";
  if (message.length > 150) return "Error: Message too long";

  if (type === "booking") return "Notification shown: Booking Confirmed";
  if (type === "cancel") return "Notification shown: Booking Cancelled";

  return "Error: Unknown notification type";
}
module.exports = sendNotification;
