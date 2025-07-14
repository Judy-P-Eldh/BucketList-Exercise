export function storeDream(dream) {
    const dreamAsString = JSON.stringify(dream);
    localStorage.setItem("dream", dreamAsString);
}
//# sourceMappingURL=Dream.js.map