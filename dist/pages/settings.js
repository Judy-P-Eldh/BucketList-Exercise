// här är det bara level-up!
import { storeThemes, loadThemes } from "../models/variables.js";
import { isLoggedIn, storeUser } from "../models/User.js";
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
    let themes = loadThemes();
    const newTheme = themeInput.value.trim();
    if (newTheme && !themes.includes(newTheme)) {
        themes.push(newTheme);
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
    themeList.innerHTML = ""; // Clear existing list
    let themes = loadThemes();
    if (themeList) {
        themes.forEach((theme, index) => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerText = `${theme}`;
            const img = document.createElement("img");
            img.src = "../assets/trash_delete.png";
            img.dataset.id = `${index}`;
            // console.log(theme, index);
            li.appendChild(p);
            li.appendChild(img);
            themeList.appendChild(li);
        });
    }
}
renderThemes();
function deleteTheme(event) {
    var _a;
    let themes = loadThemes();
    const target = event.target;
    const deleteImg = target.closest('img');
    if (deleteImg) {
        const themeToDelete = (_a = deleteImg.previousSibling) === null || _a === void 0 ? void 0 : _a.textContent;
        const found = themes.find(t => t === themeToDelete);
        // console.log(found);
        const id = Number(deleteImg.dataset.id);
        const index = themes.findIndex(t => t === found);
        console.log(index);
        if (index !== -1) {
            themes.splice(index, 1);
            storeThemes(themes);
        }
    }
    renderThemes();
}
themeList.addEventListener("click", deleteTheme);
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", logOut);
function logOut() {
    // removeUser();
    if (isLoggedIn) {
        isLoggedIn() === false;
    }
    window.location.replace('login.html');
}
;
//# sourceMappingURL=settings.js.map