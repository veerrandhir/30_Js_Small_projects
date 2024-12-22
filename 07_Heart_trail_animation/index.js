const bodyE1 = document.querySelector('body');

bodyE1.addEventListener("mousemove" , (e)=> {
    console.log(e.offsetX , e.offsetY);
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanE1 = document.createElement("span");
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    spanE1.style.right = xPos + "px";
    spanE1.style.bottom = yPos + "px";
    const randomSize = Math.random() *100
    spanE1.style.width = randomSize + "px";
    spanE1.style.height = randomSize + "px";  
    bodyE1.appendChild(spanE1);
    setTimeout(()=>{
        spanE1.remove();
    }, 2920);
       
    })
