import { dreams, } from "../models/variables.js";
const dreamList = document.querySelector(".dream-list");
function renderList() {
    dreams.forEach(dream => {
        const listItem = document.createElement("li");
        listItem.classList.add("dream-list_item");
        if (listItem) {
            dreamList.appendChild(listItem);
        }
        const checkBox = document.createElement("input");
        checkBox.classList.add("dream-check");
        checkBox.type = "checkbox";
        listItem.appendChild(checkBox);
        const label = document.createElement("label");
        label.textContent = `${dream.name} `;
        listItem.appendChild(label);
        const spanInLabel = document.createElement("span");
        spanInLabel.classList.add("dream-theme");
        spanInLabel.innerText = ` ${dream.theme}`;
        label.appendChild(spanInLabel);
        const deleteBtn = document.createElement("button");
        listItem.appendChild(deleteBtn);
        const deleteImg = document.createElement("img");
        deleteImg.src = "../assets/trash_delete.png";
        deleteBtn.appendChild(deleteImg);
    });
}
renderList();
//# sourceMappingURL=dashboard.js.map