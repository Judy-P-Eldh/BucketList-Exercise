export let themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];
export let name = "NAMN";
export let dreams = [];
// Använd local storage för att spara.
export function storeDreamList(dreams) {
    const dreamListAsString = JSON.stringify(dreams);
    localStorage.setItem("dreams", dreamListAsString);
}
export function LogDreamList() {
    console.log(dreams.length);
    console.log(dreams);
}
const dreamListAsString = localStorage.getItem("dreams");
if (dreamListAsString) {
    const dreamsList = JSON.parse(dreamListAsString);
    dreams = dreamsList;
}
//# sourceMappingURL=variables.js.map