let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choise');

const msg = document.querySelector('#msg');

const userPara = document.querySelector('#user-score'); 
const comPara =  document.querySelector('#comp-score');


choices.forEach((choise)=>{ 
    // console.log('my choise is ' , choise); // har yek div select ho gaya 
    choise.addEventListener('click',()=>{ // ispe ham listner lagaye hai taaki jab click ho mujhe result mile
        // console.log('You selected :' , choise.id); // user choise ko receive kr liye hm
        const userChoice = choise.id // user choise ko yek cariable main store kar diye,
        // console.log(userChoice);
        
        playGame(userChoice)    
    })
})  
const gencompChoice = ()=>{
    let options = ['rock', 'paper', 'scissor'] // store our choicses in an array.
    let randomIdx = Math.floor(Math.random() *3)
    console.log('Upper index  ', options[randomIdx]);
    // console.log('when fn called ',randomIdx);
    
    return options[randomIdx]    
}
const showWinner = (userWin)=>{
    if (userWin){
        userScore ++;
        userPara.innerText = userScore
        console.log('You win!!');
        msg.innerHTML = "You Win!"
        msg.style.backgroundColor = "green"
    }else{
        compScore ++;
        comPara.innerText = compScore;
        console.log('You lose!');
        msg.innerHTML = "You lose!!"
        msg.style.backgroundColor = "red"
        

    }
}


const playGame = (userChoice)=>{
    console.log("User Choice is : ", userChoice); // received user choice in game
    // Generate Comp choise
    const comChoice = gencompChoice();
    if(comChoice === userChoice) {
        console.log("game Drow");
        console.log(`User choise is ${userChoice} and Comp is ${comChoice}`);
        console.log('Computer Choice is : ', comChoice);
        console.log('user Choise is :' , userChoice);
        msg.innerHTML = "Game  Draw. Play Again!"
        msg.style.backgroundColor = "rgb(20, 118, 161)";


    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            // comp must be scissor , paper
            userWin = comChoice === 'paper' ? false :true;
            
        }else if(userChoice ==='paper'){
            // com choise must be rock , scissor
            userWin = comChoice === "scissor" ? false : true;
        }else {
            // com choise must be rock , paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// HAHAHAHAHAH Game ban gya finally and is game ko banane main hamko 5 hr se jyda time lag gaya.., 


