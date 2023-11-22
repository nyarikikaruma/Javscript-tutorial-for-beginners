
// JavaScript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Retrieve form values
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
  
    // Perform form validation
    if (name === '') {
      alert('Please enter your name.');
      return; // Stop the execution
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return; // Stop the execution
    }
  
    // If the form is valid, submit the data to the server
    submitForm(name, email);
  });
  
  function isValidEmail(email) {
    // Email validation logic here (you can use regular expressions, libraries, or built-in HTML5 validation)
    // For simplicity, we'll check if the email contains '@'
    return email.includes('@');
  }
  
  function submitForm(name, email) {
    // Code to submit the form data to the server
    // Here, we'll use the fetch() function to POST the data to an API endpoint
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        // Handle any errors that occur during form submission
        console.error(error);
        alert('An error occurred while submitting the form.');
      });
  }