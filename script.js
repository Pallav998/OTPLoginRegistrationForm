

function showOtpBox() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('otpBox').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    resetFormStyles(); // Resets any changes
}

function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('otpBox').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    resetFormStyles();
}

function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'flex'; // Changed to 'flex' if you're using flex layout
    document.getElementById('otpBox').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    resetFormStyles();
}

// Optional: Add this function to reset CSS styles as needed
function resetFormStyles() {
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.style.width = '100%';
    registrationForm.style.maxWidth = '360px';
    registrationForm.style.height = '440px';
}