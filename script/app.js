
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0 , 1, 2], 
    [3 , 4, 5], 
    [6 , 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    [0, 4, 8], 
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
// Use board string same as the cells in duck game
let board
let Playerturn 
let winner
let tie 
let CPUturn 

/*------------------------ Cached Element References ------------------------*/

const squareElems = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const SetPlayer = document.querySelector('.SetPlayer')
const HTPbtn = document.querySelector('#HTPbtn')
const HowToPlay = document.querySelector('.HowToPlay')
const closed = document.querySelector('.closed')
const CPU = document.querySelector('.CPU')
const container = document.querySelector('.container')
const winPopX = document.querySelector('.winPopX')
const winPopO = document.querySelector('.winPopO')
const winPopCPU = document.querySelector('.winPopCPU')
const PopTie = document.querySelector('.PopTie')
const endingBoard = document.querySelector('.board')

/*-------------------------------- Functions --------------------------------*/

function updateBoard(){
for (i = 0; i<board.length ; i++){

    squareElems[i].textContent = board[i]

}
}

function updateMessage(squareIndex){
    if (winner === false && tie === false && Playerturn === ''){ 
        return messageEl.textContent = 'Choose X or O to Play'
    } else if (winner === false && tie === false && Playerturn === 'O') {
       return messageEl.textContent = 'Now O turn'
    } else if (winner === false && tie === false && Playerturn === 'X'){
        return messageEl.textContent = 'Now X turn'
    }
    else if (winner === false && tie === true){
        messageEl.textContent = 'It is a TIE'
    } 
    else  if (winner === true && Playerturn === 'X' && board[squareIndex] != ''){
       return messageEl.textContent = 'O won'
    } else {
        messageEl.textContent = 'X won'
        }
    }

function placePiece(index){
    if(!Playerturn) {
        return;
    } else {
        board[index] = Playerturn
    }
    switchPlayerTurn()

}

function handleClick(event){
        if(!Playerturn) return;
        const squareIndex = event.target.id
        if(board[squareIndex] !== '' || winner === true) {
            return 
}
        placePiece(squareIndex)
        checkForTie()
        checkForWinner()
        if (CPUturn === true) {
            CPUfun()
        }
        checkForTie()
        checkForWinner()
        winPop()
        render()
}



function clickInstruction() {
    HowToPlay.style.display = "block"
    container.style.display = "block"
}

function CloseWindow(){
    HowToPlay.style.display = "none"
    container.style.display = "none"
    winPopX.style.display = "none"
    winPopO.style.display = "none"
    PopTie.style.display = "none"
    winPopCPU.style.display = "none"
    
}

function checkForWinner(){
    if ((board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
    (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
    (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
    (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
    (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
    (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
    (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
    (board[2] !== '' && board[2] === board[4] && board[2] === board[6])){
        console.log('winner should go true')
        winner = true
    }
    }   


function checkForTie(){
    if (winner === true){
        return 
    }
        if(!board.includes('')){
            tie = true
        }
}

function switchPlayerTurn(){
    if (winner === true) {
        return 
    }
    if (Playerturn === 'X'){
            Playerturn = 'O'
    } else {
            Playerturn = 'X'
    }
    }


function render(){
    updateBoard()
    updateMessage()
}

function SetCPU(){

    if(Playerturn) {
        CPU.classList.add("hidden")
        SetPlayer.classList.add("hidden")
        return ;
    } else {
        Playerturn = 'O'
        SetPlayer.classList.add("hidden")
        CPU.classList.add("hidden")
    }
    messageEl.textContent = 'Now O turn'

}
function SetPlayerfun(){

    if(Playerturn) {
        SetPlayer.classList.add("hidden")
        CPU.classList.add("hidden")
        return;
    } else {
        Playerturn = 'X'
        SetPlayer.classList.add("hidden")
        CPU.classList.add("hidden")
    }

    messageEl.textContent = 'Now X turn'
    
}

function setCpuTrue() {
    CPUturn = true;
    handleClick()
    SetCPU()
    switchPlayerTurn()
}


function CPUfun(){
    SetCPU()
    const isFilled = board.every((tile)=>{
        return tile !== ""
    })
    if (Playerturn === 'O' && winner === false && isFilled){
        console.log("tie")
        return
    }

    if(winner === false){
    let randomInd = Math.floor(Math.random() * 9)

    if (board[randomInd]) {
        return CPUfun()
    } else if (board[randomInd] === '' && winner === true){
        return  
    } 
     board[randomInd] = 'O'

    switchPlayerTurn()
   }
}

function winPop(){
    if (winner === true && Playerturn === 'O'){
        winPopX.style.display = "block"
        endingBoard.style.display = "none"

    } else if (CPUturn === true && tie === false && winner === true){
       
        winPopCPU.style.display = "block"
        endingBoard.style.display = "none"

    }
     else if (winner === true && Playerturn === 'X'){
        winPopO.style.display = "block"
        endingBoard.style.display = "none"

    } else if (tie === true) {
        PopTie.style.display = "block"
        endingBoard.style.display = "none"

    }


}




function init(){
 board = ['','','',
          '','','',
          '','','']

 Playerturn = ''
 winner = false
 tie = false
 CPUturn = false
  

render()

}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareElems.forEach(function(OnesqrElm){
OnesqrElm.addEventListener('click', handleClick)
SetPlayer.addEventListener('click',SetPlayerfun)
})

HTPbtn.addEventListener('click', clickInstruction)
closed.addEventListener('click', CloseWindow)
CPU.addEventListener('click', setCpuTrue)
winPopX.addEventListener('click', CloseWindow)
winPopO.addEventListener('click', CloseWindow)
PopTie.addEventListener('click', CloseWindow)
winPopCPU.addEventListener('click', CloseWindow)

document.addEventListener('DOMContentLoaded', init) 



