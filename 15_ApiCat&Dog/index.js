const cat_result = document.getElementById("cat_result")
const dog_result = document.getElementById("dog_result")
const cat_button = document.getElementById("cat_button")
const dog_button = document.getElementById("dog_button")

function catClick() {cat_button.addEventListener("click", ()=>{
    cat_result.innerText = "Hello I am a cat"
    console.log("Cat was clicked");
    
})}
catClick()
function dogClick() {dog_button.addEventListener("click", ()=>{
    dog_result.innerText = "Hello I am a dog"
    console.log("Dog was clicked");
    
})}
dogClick()
