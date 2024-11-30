// Initialize EmailJS with the public key
emailjs.init('E4Y9gN0ID_3vL-Mqd');

// Get the contact form element
const form = document.getElementById('contact-form');

// Function to validate form inputs
const validateForm = () => {
  const inputs = form.querySelectorAll('input, textarea');
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert(`Please fill out the ${input.any || 'required field'}.`);
      return false; // Return false if any input is empty
    }
  }
  return true; // Return true if all inputs are valid
};

// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault(); // Prevent default form submission

  if (!validateForm()) {
    return; // Exit if validation fails
  }

  try {
    // Send the form using EmailJS
    await emailjs.sendForm('service_8j6zq28', 'template_ug9vugt', form);
    alert("Message sent successfully!");
    form.reset(); // Reset the form after submission
  } catch (error) {
    console.error("Error sending message:", error); // Log the error for debugging
    alert("Failed to send message. Please try again.");
  }
};

// Attach the event listener for form submission
form.addEventListener('submit', handleFormSubmit);
