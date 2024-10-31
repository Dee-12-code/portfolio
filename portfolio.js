// Initialize EmailJS
emailjs.init({
  publicKey: 'E4Y9gN0ID_3vL-Mqd',
});

// Get the contact form element
const form = document.getElementById('contact-form');

// Event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_8j6zq28', 'template_ug9vugt', this)
      .then(function(response) {
          alert("Message sent successfully!");
          form.reset(); // Optionally reset the form after submission
      }, function(error) {
          alert("Failed to send message. Please try again.");
      });
});
