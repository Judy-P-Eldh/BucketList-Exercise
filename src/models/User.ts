export interface User {
    id: number,
    name: string,
    password: string
}

export function storeUser(user: User) {
    const userAsString = JSON.stringify(user);
    localStorage.setItem("user", userAsString);
}

export function storeUserSession(user: User) {
     const userAsString = JSON.stringify(user);
    sessionStorage.setItem("user", userAsString);
}

export function isLoggedIn(): boolean {
    const user = localStorage.getItem("user");
    if (user) {
        return true;
    }
    return false;
}