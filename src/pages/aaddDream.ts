import { dreams, LogDreamList, storeDreamList } from "../models/variables.js";
import { Dream, storeDream } from "../models/Dream.js";

const dreamForm = document.getElementById("dreamForm") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const themeInput = document.getElementById("dream-select") as HTMLSelectElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const dreamErrorMessage = document.getElementById("dream-error-message") as HTMLParagraphElement;

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

    const newDream: Dream = {
        id: 2,
        name: dreamInput.value,
        theme: themeInput.value,
        checked: false
    }

    storeDream(newDream);
    //console.log(newDream);

    dreams.push(newDream);
    storeDreamList(dreams);
    LogDreamList();
}

dreamForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    addDream();
    window.location.href = "dashboard.html";
    //console.log(dreams);
});






