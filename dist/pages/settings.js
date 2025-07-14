// här är det bara level-up!
import { themes } from "../models/variables.js";
// import { getUser, changeUsername, removeUser } from "../utils/storage";
const nameInput = document.getElementById("name-input");
// nameInput.value = getUser() || name;
const themeList = document.getElementById("theme-list");
if (themeList) {
    themes.forEach((theme, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<p id="theme-${index}">${theme}</p> <img src="../assets/images/trash_delete.png" />`;
        themeList.appendChild(li);
    });
}
// "logga ut"
const logOutBtn = document.querySelector(".logout");
logOutBtn === null || logOutBtn === void 0 ? void 0 : logOutBtn.addEventListener("click", logOut);
function logOut() {
    // removeUser();
    window.location.replace('login.html');
}
;
// lägg till hantering av teman
//# sourceMappingURL=settings.js.map