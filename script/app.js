
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
console.log(squareElems[0])
/*-------------------------------- Functions --------------------------------*/




function updateBoard(){
for (i = 0; i<board.length ; i++){

    squareElems[i].textContent = board[i]

    // if (board[i] === squareElems[i]){
    // }
}
}

function updateMessage(){
    if (winner === false && tie === false && turn === 'X'){ 
        return messageEl.textContent = 'Now it is Player X turn'
    } else  if (winner === false && tie === false && turn === 'O') {
       return messageEl.textContent = 'Now O turn'
    }
    else if (winner === false && tie === true){
        messageEl.textContent = 'It is a TIE'
    } 
    else  if (winner === true && turn === 'X'){
       return messageEl.textContent = 'X won'
    } else {
        messageEl.textContent = 'O won'
        }
    }


// console.log(updateMessage())

function placePiece(index){
    board[index] = turn

}

function handleClick(event){
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

function init(){
 board = ['','','',
          '','','',
          '','','']

 turn = 'X'
 winner = false
 tie = false
render()

}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareElems.forEach(function(OnesqrElm){
OnesqrElm.addEventListener('click', handleClick)

})



document.addEventListener('DOMContentLoaded', init) 