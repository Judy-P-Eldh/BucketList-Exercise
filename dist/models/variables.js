export let themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];
export let dreams = [];
// Använd local storage för att spara.
export function storeDreamList(dreams) {
    localStorage.setItem("dreams", JSON.stringify(dreams));
}
export function LogDreamList() {
    console.log(dreams.length);
    console.log(dreams);
}
export function loadDreams() {
    let dreams = localStorage.getItem("dreams");
    return dreams ? JSON.parse(dreams) : [];
}
export function storeThemes(themes) {
    localStorage.setItem("themes", JSON.stringify(themes));
}
export function loadThemes() {
    let themes = localStorage.getItem("themes");
    return themes ? JSON.parse(themes) : [];
}
//# sourceMappingURL=variables.js.map