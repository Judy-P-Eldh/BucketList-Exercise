export function storeUser(user) {
    const userAsString = JSON.stringify(user);
    localStorage.setItem("user", userAsString);
}
//# sourceMappingURL=User.js.map