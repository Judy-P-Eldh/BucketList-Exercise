export function storeUser(user) {
    const userAsString = JSON.stringify(user);
    localStorage.setItem("user", userAsString);
}
export function storeUserSession(user) {
    const userAsString = JSON.stringify(user);
    sessionStorage.setItem("user", userAsString);
}
export function isLoggedIn() {
    const user = localStorage.getItem("user");
    if (user) {
        return true;
    }
    return false;
}
//# sourceMappingURL=User.js.map