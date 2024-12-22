// generate a random color

const randomColor = function (){
    const hex = '0123456789ABCDEF' ; // hex color has 16 value and these alfa num.
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)];
    }
    return color;
};
// random #code is generated
let intervalId; 
const startChangingColor = function(){
    if (!intervalId){
        intervalId = setInterval(changeBgColor, 1000);

    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor()); 
    }
};

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
