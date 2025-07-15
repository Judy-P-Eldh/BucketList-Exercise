import { dreams, } from "../models/variables.js";

const dreamList = document.querySelector(".dream-list") as HTMLUListElement;
const userName = document.getElementById("user-name") as HTMLSpanElement;

function showUserName() {
    const userString = localStorage.getItem("user");
    if (userString) {
        const user = JSON.parse(userString);
        userName.innerText = `${user.name}!`;
    }
}
showUserName();

function renderList(): void {
    dreams.forEach(dream => {
        const listItem = document.createElement("li");
        listItem.classList.add("dream-list_item");
        if (listItem) {
            dreamList.appendChild(listItem);
        }

        const checkBox = document.createElement("input") as HTMLInputElement;
        checkBox.classList.add("dream-check");
        checkBox.type = "checkbox";
        listItem.appendChild(checkBox);

        const label = document.createElement("label") as HTMLLabelElement;
        label.textContent = `${dream.name} `;
        listItem.appendChild(label);

        const spanInLabel = document.createElement("span") as HTMLSpanElement;
        spanInLabel.classList.add("dream-theme");
        spanInLabel.innerText = ` ${dream.theme}`;
        label.appendChild(spanInLabel);

        const deleteBtn = document.createElement("button") as HTMLButtonElement;
        listItem.appendChild(deleteBtn);

        const deleteImg = document.createElement("img") as HTMLImageElement;
        deleteImg.src = "../assets/trash_delete.png";
        deleteBtn.appendChild(deleteImg);
    });
}
renderList();

