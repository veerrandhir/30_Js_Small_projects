let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newGame = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true; // player kise player ka turn choose kiye

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]; // this is all possible win Result

const restartGame = ()=>{
    turnO = true;
    boxes.forEach((box)=>{
        box.disabled = false ;
        box.innerText = "";   
        msgContainer.classList.add("hide");  // ahan pr isko add kar diye taaki result hide ho jaye
    })
}
newGame.addEventListener('click',restartGame )



const resetGame = ()=>{
    turnO = true;
    boxes.forEach((box)=>{
        box.disabled = false ;
        box.innerText = "";
    })
}
resetBtn.addEventListener('click', resetGame)

const boxClicked = boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    // box.innerText = 'X'; // jab box click hoga ye print ho jayega so
    if (turnO) {
      // suppose start main O print hoga jab ye condition true hoga to
      box.innerText = "O";
      turnO = false; // fir isko false kar dega taaki O again print nahi ho
    } else {
      box.innerText = "X"; // Ab X print hoga kyun ki turnO false hai .
      turnO = true; // Execute hone ke baad turnO true ho jayega taaki agian hm O print kar sake
    }
    box.disabled = true;
    checkWinner(); // call this fn when any player match
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

// lets declear fn and it will call back above
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // it wil access each element of winPatterns and return
    // console.log(pattern[0] , pattern[1] , pattern[2] , "This  is the position"); // win pattern ke elememt ko print kara rhe the

    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // ); // ye ham saare box ke inner text ko nikaal ne ke liye likhe hain .

    // each position value ko nikaal liye
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
        boxes.forEach((boxex)=>{ // this fn disable the box after result
            boxex.disabled = true;
        })
      }
    }
  }
};
