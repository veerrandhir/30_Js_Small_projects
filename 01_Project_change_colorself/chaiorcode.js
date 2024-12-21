const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

buttons.forEach(function(button){
    // console.log(button);
    // console.log(button.target);
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target.id);
    // Doing same with switch
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'black':
                body.style.backgroundColor = e.target.id
                break;    
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;  
            case 'white':
                body.style.backgroundColor = e.target.id
                break;  

        
            default:
                break;
        }
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id
        // }
        
    });
});
