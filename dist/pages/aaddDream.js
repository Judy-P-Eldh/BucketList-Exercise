import { dreams, LogDreamList, storeDreamList } from "../models/variables.js";
import { storeDream } from "../models/Dream.js";
const dreamForm = document.getElementById("dreamForm");
const dreamInput = document.getElementById("dream");
const themeInput = document.getElementById("dream-select");
const dreamErrorMessage = document.getElementById("dream-error-message");
function addDream() {
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
    //console.log(newDream);
    dreams.push(newDream);
    storeDreamList(dreams);
    LogDreamList();
}
dreamForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addDream();
    window.location.href = "dashboard.html";
    //console.log(dreams);
});
//# sourceMappingURL=aaddDream.js.map