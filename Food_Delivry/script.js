document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if user exists in localStorage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var loggedInUser = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (loggedInUser) {
        alert('Login successful!');
        window.location.href='food_delivery.html'
        // You can redirect to another page or perform other actions here
    } else {
        alert('Invalid email or password. Please signup first.');
    }
});