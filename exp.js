const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    const usernameValue = usernameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    if (usernameValue === '') {
        usernameError.textContent = 'Username is required.';
    }

    if (emailValue === '') {
        emailError.textContent = 'Email is required.';
    } else if (!isValidEmail(emailValue)) {
        emailError.textContent = 'Email is not valid.';
    }

    if (passwordValue === '') {
        passwordError.textContent = 'Password is required.';
    } else if (passwordValue.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
    }

    if (confirmPasswordValue === '') {
        confirmPasswordError.textContent = 'Please confirm your password.';
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordError.textContent = 'Passwords do not match.';
    }
}

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
