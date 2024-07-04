document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    // Get existing users from localStorage or initialize empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    var existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        alert('User already exists. Please login.');
    } else {
        // Add new user to the array
        users.push({ email: email, password: password });

        // Save updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful! Please login.');
        // Optionally, redirect to login page
        window.location.href = 'index.html';
    }
});