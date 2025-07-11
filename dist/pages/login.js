"use strict";
const loginBtn = document.getElementById("loginBtn");
const eyeButton = document.getElementById("eyeBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userNameError = document.getElementById("username-error-message");
const passwordError = document.getElementById("password-error-message");
const form = document.getElementById("login-form");
const minPasswordLength = 4;
eyeButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
});
function validateUser() {
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (!username || username === "") {
        userNameError.classList.remove("hidden");
        return false;
    }
    if (!password || password.length < minPasswordLength) {
        passwordError.classList.remove("hidden");
        alert("Ange ett lösenord med minst 4 tecken.");
        return false;
    }
    return true;
}
loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("klickat!");
    if (!validateUser()) {
        return;
    }
    else {
        form.submit();
    }
});
//# sourceMappingURL=login.js.map