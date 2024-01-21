function subscribe() {
    const emailInput = document.getElementById('email');
    const subscribeMessage = document.getElementById('subscribe-message');

    // Simple email validation
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        subscribeMessage.textContent = Thanks for subscribing, ${email}! Together we can make a difference.;
        subscribeMessage.style.color = '#28a745'; // Green color for success
        // You can add further logic here, such as sending the email to a server
    } else {
        subscribeMessage.textContent = 'Please enter a valid email address.';
        subscribeMessage.style.color = '#dc3545'; // Red color for error
    }

    // Clear the input after submission
    emailInput.value = '';
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }