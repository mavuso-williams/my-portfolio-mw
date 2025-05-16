function sendMessage() {
  // Open the user's email client with a prefilled email
  window.location.href = "mailto:your.email@example.com?subject=Hire Me&body=Hello!%0A%0AI am interested in working with you.%0A%0ABest regards";

  // Show the notification on successful action
  const notification = document.getElementById("notification");
  notification.textContent = "Your message has been sent! 🎉";
  notification.style.display = "block";

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
