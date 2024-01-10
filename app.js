let boxes = document.querySelectorAll(".box");
let resetBttn = document.querySelector(".reset")
let newGameBttn = document.querySelector("#newBttn")
let mssgContainer = document.querySelector(".mssg-container")
let mssg = document.querySelector("#mssg")

let turnO = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],    
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBttn();
    mssg-mssgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if (turnO === true) {
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    count ++

    let iswinner = checkWinner();

    if(count===9 && !iswinner){
        gameDraw();
    }
  });
});

const gameDraw = () => {
    mssg.innerText = `Match was Draw`
    mssg-mssgContainer.classList.remove("hide")
    disableBttn();
}

const disableBttn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBttn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    mssg.innerText = `Congratulation, Winner is ${winner}`
    mssg-mssgContainer.classList.remove("hide")
    disableBttn();
};


const checkWinner = () => {
    for(pattern of winPattern) {
        let pos1Val = (boxes[pattern[0]].innerText)
        let pos2Val = (boxes[pattern[1]].innerText)
        let pos3Val = (boxes[pattern[2]].innerText)

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val)
        }   
    }    
};   
}

newGameBttn.addEventListener("click",resetGame);
resetBttn.addEventListener("click",resetGame);