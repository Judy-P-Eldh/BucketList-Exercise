import { User, storeUser } from "../models/User.js";

const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
const eyeButton = document.getElementById("eyeBtn") as HTMLButtonElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const userNameError = document.getElementById("username-error-message") as HTMLParagraphElement;
const passwordError = document.getElementById("password-error-message") as HTMLParagraphElement;
const form = document.getElementById("login-form") as HTMLFormElement;

const minPasswordLength = 4;

eyeButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

function validateUser(): boolean {
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
  const newUser: User = {
    id: 1,
   name: username,
   password: password 
  }

  storeUser(newUser);
  return true;
}


loginBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (!validateUser()) {
    return;
  }else {
    form.submit();
  }
});