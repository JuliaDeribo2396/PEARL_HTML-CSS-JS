
// Register Alert
const register = document.querySelector('.register-form form');
register.onsubmit = function (event) {
    event.preventDefault();
    alert('Your have successfully registered');
    window.location.reload();
};

// Sign in Alert
const sign = document.querySelector('.login-form form');
sign.onsubmit = function (event) {
    event.preventDefault();
    alert('Your have successfully logged in into your account');
    window.location.reload();
};
