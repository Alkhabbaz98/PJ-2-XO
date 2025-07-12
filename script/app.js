
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0 , 1, 2], 
    [3 , 4, 5], 
    [7 , 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9],
    [1, 5, 9], 
    [3, 5, 7]
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
    if (winner === false && tie === false){ 
        if(turn === 'X'){
        messageEl.textContent = 'Now it is Player X turn'
    } else {
        messageEl.textContent = 'Now O turn'
    }
    } else if (winner === false && tie === true){
        messageEl.textContent = 'It is a TIE'
    } else {
        if(turn === 'X'){
        messageEl.textContent = 'X won'
    } else {
        messageEl.textContent = 'O won'
    }
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
if(board[squareIndex] !== '') {
    return 
} else if (board[squareIndex] === 'X' || board[squareIndex] === 'O'){
    return 
}


placePiece(squareIndex)
// console.log(squareIndex)
checkForWinner()
checkForTie()

}




function checkForWinner(){
    for (w = 0; w<winningCombos.length ; w++) {
    if (winningCombos[w] === ''){
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
}}

function checkForTie(){
    if (winner = true){
        return
    }
    for (e = 0; e<board.length ; e++){
        if(board[e] === ''){
            tie = false
        } else {
            tie = true 
        }
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



// document.addEventListener('DOMContentLoaded', init) 