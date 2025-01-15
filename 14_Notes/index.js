const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const notes = document.querySelectorAll(".input-box")

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox); // be carefull while appending child
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});
