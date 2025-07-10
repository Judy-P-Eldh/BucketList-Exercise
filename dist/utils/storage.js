export function storeUser(username, password) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
}
export function getUser() {
    return sessionStorage.getItem("username");
}
export function getPassword() {
    return sessionStorage.getItem("password");
}
export function removeUser() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
}
export function changeUsername(newUsername) {
    sessionStorage.setItem("username", newUsername);
}
//# sourceMappingURL=storage.js.map