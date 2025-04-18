const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const notes = document.querySelectorAll(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes",notesContainer.innerHTML); // it will store whatever stored in notesContainer in the name notes 
}
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
        updateStorage();

    }else if(e.target.tagName ==="P"){

        const notes = document.querySelectorAll(".input-box")
        notes.forEach(notesElement => {
            notesElement.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
