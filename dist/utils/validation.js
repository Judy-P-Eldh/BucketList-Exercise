import { minPasswordLength } from "../models/variables";
export function validateUsername(username) {
    if (!username || username === "") {
        throw new Error("Username cannot be empty.");
    }
    return username;
}
export function validatePassword(password) {
    if (!password || password === "") {
        throw new Error("Password cannot be empty.");
    }
    if (password.length < minPasswordLength) {
        throw new Error(`Password must be at least ${minPasswordLength} characters long.`);
    }
    return password;
}
//# sourceMappingURL=validation.js.map