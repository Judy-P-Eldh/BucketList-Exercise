// här är det bara level-up!
import { storeThemes, themes, loadThemes } from "../models/variables.js";
import { storeUser } from "../models/User.js";
const nameInput = document.getElementById("name-input");
const saveNameBtn = document.getElementById("newName");
const saveNewThemeBtn = document.getElementById("newTheme");
const themeInput = document.getElementById("theme-input");
const themeList = document.getElementById("theme-list");
function saveNewName() {
    const userString = localStorage.getItem("user");
    if (userString) {
        const user = JSON.parse(userString);
        user.name = nameInput.value;
        console.log(user.name);
        storeUser(user);
    }
    window.location.href = "dashboard.html";
}
saveNameBtn.addEventListener("click", saveNewName);
function addTheme() {
    const newTheme = themeInput.value.trim();
    if (newTheme && !themes.includes(newTheme)) {
        themes.push(newTheme);
        const li = document.createElement("li");
        li.innerHTML = `<p>${newTheme}</p> <img src="../assets/trash_delete.png" />`;
        themeList.appendChild(li);
        storeThemes(themes);
        themeInput.value = ""; // Clear input field
    }
    else {
        alert("Tema finns redan eller är tomt.");
    }
    window.location.href = "add-dream.html";
}
saveNewThemeBtn.addEventListener("click", addTheme);
function renderThemes() {
    let themes = loadThemes();
    if (themeList) {
        themeList.innerHTML = ""; // Clear existing list
        themes.forEach((theme, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<p id="theme-${index}">${theme}</p> <img src="../assets/trash_delete.png" />`;
            themeList.appendChild(li);
        });
    }
}
renderThemes();
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", logOut);
function logOut() {
    // removeUser();
    window.location.replace('login.html');
}
;
//# sourceMappingURL=settings.js.map