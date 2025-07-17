import { dreams, loadDreams, storeDreamList } from "../models/variables.js";
const dreamList = document.querySelector(".dream-list");
const userName = document.getElementById("user-name");
function showUserName() {
    const userString = localStorage.getItem("user");
    if (userString) {
        const user = JSON.parse(userString);
        userName.innerText = `${user.name}!`;
    }
}
showUserName();
function debugDreams() {
    console.log(dreams.length);
    console.log(dreams.forEach(dream => console.log(dream.name, dream.id)));
}
function renderList() {
    dreamList.innerHTML = '';
    let dreams = loadDreams();
    dreams.forEach(dream => {
        const listItem = document.createElement("li");
        listItem.classList.add("dream-list_item");
        if (listItem) {
            dreamList.appendChild(listItem);
        }
        const checkBox = document.createElement("input");
        checkBox.classList.add("dream-check");
        checkBox.type = "checkbox";
        checkBox.dataset.id = dream.id.toString();
        checkBox.checked = dream.checked;
        listItem.appendChild(checkBox);
        const label = document.createElement("label");
        label.textContent = `${dream.name} `;
        listItem.appendChild(label);
        const spanInLabel = document.createElement("span");
        spanInLabel.classList.add("dream-theme");
        spanInLabel.innerText = ` ${dream.theme}`;
        label.appendChild(spanInLabel);
        const deleteBtn = document.createElement("button");
        deleteBtn.dataset.id = dream.id.toString();
        listItem.appendChild(deleteBtn);
        const deleteImg = document.createElement("img");
        deleteImg.src = "../assets/trash_delete.png";
        deleteBtn.appendChild(deleteImg);
    });
}
renderList();
function handleListAction(event) {
    let dreams = loadDreams();
    const target = event.target;
    const deleteButton = target.closest('button');
    const checkbox = target.closest('input[type="checkbox"]');
    if (deleteButton) {
        const id = Number(deleteButton.dataset.id);
        const index = dreams.findIndex(d => d.id === id);
        if (index !== -1) {
            dreams.splice(index, 1);
            storeDreamList(dreams);
        }
    }
    if (checkbox) {
        const id = Number(target.dataset.id);
        const index = dreams.findIndex(d => d.id === id);
        checkbox.checked ? dreams[index].checked = true : dreams[index].checked = false;
        storeDreamList(dreams);
        checkbox.checked = !checkbox.checked;
    }
    renderList();
}
dreamList.addEventListener("click", handleListAction);
//# sourceMappingURL=dashboard.js.map