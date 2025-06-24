// Initialize EmailJS (replace with your own user ID from emailjs.com)
emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("statusMessage");

  // Basic Validation
  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    return;
  }

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function() {
      status.textContent = "Message sent successfully!";
      document.getElementById("contactForm").reset();
    }, function(error) {
      console.log(error);
      status.textContent = "Something went wrong. Please try again later.";
    });
});
