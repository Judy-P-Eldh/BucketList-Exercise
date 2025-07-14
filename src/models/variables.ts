
import { Dream } from "../models/Dream";
export let themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];
export let name = "NAMN";
export let dreams: Dream[] = [];

// Använd local storage för att spara.

export function storeDreamList(dreams: Dream[]) {
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
