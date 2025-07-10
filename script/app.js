
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    ['X','','',
     '','X','',
     '','','X'], 

    ['','','X',
     '','X','',
     'X','',''],

    ['','','X',
     '','','X',
     '','','X'], 

    ['','X','',
     '','X','',
     '','X',''],  

    ['X','','',
     'X','','',
     'X','',''], 

    ['','','',
     '','','',
     'X','X','X'],  
     
    ['','','',
     'X','X','X',
     '','',''], 

    ['X','X','X',
     '','','',
     '','',''], 
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
}
placePiece(squareIndex)
// console.log(squareIndex)
}

function checkForWinner(){
    if (winner ===)
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