import { loadDreams, loadThemes, storeDreamList } from "../models/variables.js";
import { storeDream } from "../models/Dream.js";
const dreamForm = document.getElementById("dreamForm");
const dreamInput = document.getElementById("dream");
const themeInput = document.getElementById("dream-select");
const dreamErrorMessage = document.getElementById("dream-error-message");
function displayThemes() {
    themeInput.innerHTML = ''; // Clear existing options
    let themes = loadThemes();
    themes.forEach((theme) => {
        const option = document.createElement("option");
        option.value = theme;
        option.textContent = theme;
        themeInput.appendChild(option);
    });
}
//console.log(themes);
displayThemes();
function addDream() {
    let dreams = loadDreams();
    if (dreams) {
        console.log(dreams.length);
    }
    if (!dreamInput || dreamInput.value === "") {
        dreamErrorMessage.classList.remove("hidden");
    }
    // skapa unikt ID
    let newId;
    if (dreams.length > 0) {
        // ta reda på vad nästa id i listan ska bli
        let maxId = 0;
        for (const dream of dreams) {
            if (dream.id > maxId) {
                maxId = dream.id;
            }
        }
        newId = maxId + 1;
    }
    else {
        // om ingen dröm finns -> tar vi ID 1
        newId = 1;
    }
    const newDream = {
        id: newId,
        name: dreamInput.value,
        theme: themeInput.value,
        checked: false
    };
    storeDream(newDream);
    dreams.push(newDream);
    storeDreamList(dreams);
    //LogDreamList();
}
dreamForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addDream();
    window.location.href = "dashboard.html";
    //console.log(dreams);
});
//# sourceMappingURL=addDream.js.map