import { elementNullCheck } from "../utils/domHelpers.js";
import { validateUsername, validatePassword } from "../utils/validation.js";
import { storeUser } from "../utils/storage.js";
const loginButton = elementNullCheck("#btn-login");
loginButton.addEventListener("click", () => {
    const usernameInput = elementNullCheck("#username");
    const username = usernameInput.value;
    const passwordInput = elementNullCheck("#password");
    const password = passwordInput.value;
    if (!validatePassword(password) || !validateUsername(username)) {
        alert("Invalid username or password.");
        return;
    }
    storeUser(username, password);
    window.location.replace("dashboard.html");
});
//# sourceMappingURL=login.js.map