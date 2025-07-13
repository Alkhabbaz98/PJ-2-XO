
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
let turn 
let winner
let tie 

/*------------------------ Cached Element References ------------------------*/
const squareElems = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const SetX = document.querySelector('.SetX')
const SetO = document.querySelector('.SetO')

console.log(squareElems[0])
/*-------------------------------- Functions --------------------------------*/




function updateBoard(){
for (i = 0; i<board.length ; i++){

    squareElems[i].textContent = board[i]

    // if (board[i] === squareElems[i]){
    // }
}
}

function updateMessage(squareIndex){
    if (winner === false && tie === false && turn === ''){ 
        return messageEl.textContent = 'Choose X or O to Play'
    } else if (winner === false && tie === false && turn === 'O') {
       return messageEl.textContent = 'Now O turn'
    } else if (winner === false && tie === false && turn === 'X'){
        return messageEl.textContent = 'Now X turn'
    }
    else if (winner === false && tie === true){
        messageEl.textContent = 'It is a TIE'
    } 
    else  if (winner === true && turn === 'X' && board[squareIndex] != ''){
       return messageEl.textContent = 'X won'
    } else {
        messageEl.textContent = 'O won'
        }
    }


// console.log(updateMessage())

function placePiece(index){
    if(!turn) {
        return;
    } else {
        board[index] = turn
    }

}

function handleClick(event){
        if(!turn) return;
    // squareElems.forEach(function(OnesqrElm){
    //     const squareIndex = squareElems[OnesqrElm].event.target.id
    // })
const squareIndex = event.target.id
if(board[squareIndex] !== '' || winner === true) {
    return 
}


placePiece(squareIndex)
// console.log(squareIndex)
checkForWinner()
checkForTie()
switchPlayerTurn()
render()

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
    if (turn === 'X'){
            turn = 'O'
    } else {
            turn = 'X'
        }
    }


function render(){
    updateBoard()
    updateMessage()
}

function SetOfun(){
    if(turn) {
        SetX.classList.add("hidden")
        SetO.classList.add("hidden")
        return ;
    } else {
        turn = 'O'
        // messageEl.textContent = 'Now O turn'
        SetX.classList.add("hidden")
        SetO.classList.add("hidden")
    }
    messageEl.textContent = 'Now O turn'
    // console.log(turn)
}
function SetXfun(){
    if(turn) {
        // messageEl.textContent = 'Now X turn'
        SetO.classList.add("hidden")
        SetX.classList.add("hidden")
        return;
    } else {
        turn = 'X'
        SetO.classList.add("hidden")
        SetX.classList.add("hidden")
    }
    // console.log(turn)
    messageEl.textContent = 'Now X turn'
    
}

function init(){
 board = ['','','',
          '','','',
          '','','']

 turn = ''
 winner = false
 tie = false


 render()

}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareElems.forEach(function(OnesqrElm){
OnesqrElm.addEventListener('click', handleClick)
SetX.addEventListener('click',SetXfun)
SetO.addEventListener('click',SetOfun)
})



document.addEventListener('DOMContentLoaded', init) 