import { dreams, loadDreams, loadThemes, storeDreamList, themes } from "../models/variables.js";
import { Dream, storeDream } from "../models/Dream.js";
import { isLoggedIn } from "../models/User.js";

const dreamForm = document.getElementById("dreamForm") as HTMLFormElement;
const dreamInput = document.getElementById("dream") as HTMLInputElement;
const themeInput = document.getElementById("dream-select") as HTMLSelectElement;
const dreamErrorMessage = document.getElementById("dream-error-message") as HTMLParagraphElement;
const userName = document.getElementById("user-name") as HTMLSpanElement;

if (isLoggedIn()) {
    showUserName();
}
else {
    let message = "Du behöver logga in";
    const p = document.createElement("p");
    p.innerText = message;

    document.body.appendChild(p);
    window.location.href = "login.html";
}

function showUserName() {
    const userString = localStorage.getItem("user");
    if (userString) {
        const user = JSON.parse(userString);
        userName.innerText = `${user.name}!`;
    }
}

function displayThemes(): void {
    themeInput.innerHTML = ''; // Clear existing options
    let themes = loadThemes();
    themes.forEach((theme) => {
        const option = document.createElement("option");
        option.value = theme;
        option.textContent = theme;
        themeInput.appendChild(option);
    });
}
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
    let newId: number;
    if (dreams.length > 0) {
        // ta reda på vad nästa id i listan ska bli
        let maxId = 0;
        for (const dream of dreams) {
            if (dream.id > maxId) {
                maxId = dream.id;
            }
        }
        newId = maxId + 1;
    } else {
        // om ingen dröm finns -> tar vi ID 1
        newId = 1;
    }

    const newDream: Dream = {
        id: newId,
        name: dreamInput.value,
        theme: themeInput.value,
        checked: false
    }

    storeDream(newDream);
    dreams.push(newDream);
    storeDreamList(dreams);
}

dreamForm.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    addDream();
    window.location.href = "dashboard.html";
});






