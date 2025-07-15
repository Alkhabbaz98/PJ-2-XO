
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
// let CPUmark
// let playerVplayer
// let cpu = [0, 1 , 2 , 3 , 4, 5 , 6, 7, 8]
/*------------------------ Cached Element References ------------------------*/
const squareElems = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const SetX = document.querySelector('.SetX')
// const SetO = document.querySelector('.SetO')
const HowToPlayBtn = document.querySelector('#HowToPlayBtn')
const HowToPlay = document.querySelector('.HowToPlay')
const closed = document.querySelector('.closed')
const CPU = document.querySelector('.CPU')

console.log(squareElems[0])
/*-------------------------------- Functions --------------------------------*/





function clickInstruction() {
    HowToPlay.style.display = "block"
}

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


// console.log(updateMessage())

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
    // squareElems.forEach(function(OnesqrElm){
    //     const squareIndex = squareElems[OnesqrElm].event.target.id
    // })
        const squareIndex = event.target.id
        if(board[squareIndex] !== '' || winner === true) {
            return 
}

        placePiece(squareIndex)
        console.log('1', {winner})
        // if(winner) return
        checkForTie()
        checkForWinner()
        CPUfun()
        checkForTie()
        checkForWinner()
        console.log('2', {winner})
        // console.log(squareIndex)
        // switchPlayerTurn()
        
        console.log('3', {winner})
        
        console.log('4', {winner})
        render()
        console.log('5', {winner})

}



function clickInstruction() {
    HowToPlay.style.display = "block"
}

function CloseWindow(){
    HowToPlay.style.display = "none"
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

      const isFilled = board.every((tile)=>{
        return tile !== ""
    })
    if (Playerturn === 'O' && winner === false && isFilled){
        console.log("tie")
        return
    }
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

// function SetOfun(){
//     // playerVplayer = true 
//     if(Playerturn) {
//         SetX.classList.add("hidden")
//         SetO.classList.add("hidden")
//         return ;
//     } else {
//         Playerturn = 'O'
//         // messageEl.textContent = 'Now O turn'
//         SetX.classList.add("hidden")
//         SetO.classList.add("hidden")
//     }
//     messageEl.textContent = 'Now O turn'
//     // console.log(turn)
// }
function SetXfun(){
//    playerVplayer = true 
    if(Playerturn) {
        // messageEl.textContent = 'Now X turn'
        // SetO.classList.add("hidden")
        SetX.classList.add("hidden")
        return;
    } else {
        Playerturn = 'X'
        // SetO.classList.add("hidden")
        SetX.classList.add("hidden")
    }
    // console.log(turn)
    messageEl.textContent = 'Now X turn'
    
}


function CPUfun(){

      const isFilled = board.every((tile)=>{
        return tile !== ""
    })
    if (Playerturn === 'O' && winner === false && isFilled){
        console.log("tie")
        return
    }
    console.log('CPU Fun is running')
    console.log(winner)
    // playerVplayer = false
    // if (playerVplayer === false){
    if(Playerturn === 'O' && winner === false){
    let randomInd = Math.floor(Math.random() * 9)
    console.log(typeof board[randomInd])
    if (board[randomInd]) {
        return CPUfun()
    } else if (board[randomInd] === '' && winner === true){
        return
    // } else if (!board.includes('') && winner === false){
    //     checkForTie()
    //     return

  
    } 
    


    board[randomInd] = 'O'
    // checkForTie()
    switchPlayerTurn()
   }
}



function init(){
 board = ['','','',
          '','','',
          '','','']

 Playerturn = ''
 winner = false
 tie = false
 CPUturn = ''
  

render()

}

init();
/*----------------------------- Event Listeners -----------------------------*/
squareElems.forEach(function(OnesqrElm){
OnesqrElm.addEventListener('click', handleClick)
SetX.addEventListener('click',SetXfun)
// SetO.addEventListener('click',SetOfun)
})

HowToPlayBtn.addEventListener('click', clickInstruction)
closed.addEventListener('click', CloseWindow)
CPU.addEventListener('Click', CPUfun)


document.addEventListener('DOMContentLoaded', init) 