import { dreams, LogDreamList, storeDreamList } from "../models/variables.js";
import { storeDream } from "../models/Dream.js";
const dreamForm = document.getElementById("dreamForm");
const dreamInput = document.getElementById("dream");
const themeInput = document.getElementById("dream-select");
const addBtn = document.getElementById("addBtn");
const dreamErrorMessage = document.getElementById("dream-error-message");
function addDream() {
    if (dreams) {
        console.log(dreams.length);
    }
    if (!dreamInput || dreamInput.value === "") {
        dreamErrorMessage.classList.remove("hidden");
    }
    let lastDreamIndex = dreams.length - 1;
    if (dreams.length > 0) {
        lastDreamIndex = lastDreamIndex + 1;
    }
    const newDream = {
        id: lastDreamIndex,
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