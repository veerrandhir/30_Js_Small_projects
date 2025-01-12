const cat_result = document.getElementById("cat_result")
const dog_result = document.getElementById("dog_result")
const cat_button = document.getElementById("cat_button")
const dog_button = document.getElementById("dog_button")


cat_button.addEventListener('click',getRandomCat)
dog_button.addEventListener('click',getRandomDog)

function  getRandomCat(){
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
    .then(res => res.json())
    .then(data =>{
        cat_result.innerHTML = `<img 
        src="${data.url}"/>`
    })
} 
function  getRandomDog(){
    fetch('https://dog.ceo/api/breeds/image/random') // Api key is not working so unable to get image but everything is working fine
    .then(res => res.json())
    .then(data =>{
        dog_result.innerHTML = `<img 
        src="${data.url}"/>`
    })
} 