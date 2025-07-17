
import { Dream } from "../models/Dream";
export let themes = ["teknikdrömmar", "vardagsdrömmar", "husdrömmar", "sportdrömmar", "resdrömmar"];

export let dreams: Dream[] = [];

// Använd local storage för att spara.

export function storeDreamList(dreams: Dream[]) {
    localStorage.setItem("dreams", JSON.stringify(dreams));
}

export function LogDreamList() {
    console.log(dreams.length);
    console.log(dreams);
}

export function loadDreams(): Dream[] {
    let dreams = localStorage.getItem("dreams");
    return dreams ? JSON.parse(dreams) : [];
}

export function storeThemes(themes: string[]) {
    localStorage.setItem("themes", JSON.stringify(themes));
}

export function loadThemes(): string[] {
    let themes = localStorage.getItem("themes");
    return themes ? JSON.parse(themes) : [];
}