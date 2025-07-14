export interface User {
    id: number,
    name: string,
    password: string 
}

export function storeUser(user: User) {
   const userAsString = JSON.stringify(user);
    localStorage.setItem("user", userAsString);
}