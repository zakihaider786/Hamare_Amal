document.addEventListener("DOMContentLoaded", function() {
    // Show spinner when page loads
    showSpinner();

    // Hide spinner after 3 seconds (simulating loading)
    setTimeout(function() {
        hideSpinner();
    }, 3000);

    // Handle Signup form submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            e.preventDefault();
            showSpinner();
            setTimeout(function() {
                hideSpinner();
                window.location.href = "dashboard.html"; // Redirect to dashboard
            }, 3000);
        });
    }

    // Handle Login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            showSpinner();
            setTimeout(function() {
                hideSpinner();
                window.location.href = "dashboard.html"; // Redirect to dashboard
            }, 3000);
        });
    }
});

// Function to show spinner
function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

// Function to hide spinner
function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

// Logout function
function logout() {
    alert("You have logged out.");
    window.location.href = "login.html"; // Redirect to login page
}
