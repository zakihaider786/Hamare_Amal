// settings.js

document.addEventListener('DOMContentLoaded', () => {
    // Check for stored settings in localStorage and apply them to the page
    applySavedSettings();
});

// Function to apply saved settings
function applySavedSettings() {
    // Apply dark mode
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Apply the selected language (for demonstration purposes)
    const language = localStorage.getItem('language');
    if (language) {
        // Example: You could load different text based on the language
        // Here we're just printing the current language for illustration
        console.log(`Selected language is: ${language}`);
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Save the preference
}

// Example for changing language - this could be expanded for actual localization
function changeLanguage(language) {
    localStorage.setItem('language', language); // Save the preference
    // You would need to add language-specific content change logic here
    console.log(`Language set to ${language}`);
}
