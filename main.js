// Global Variable(s)

var game = new Game();

var boxes = Array.from(document.getElementsByClassName("box-space"));
console.log(boxes)

// Query Selector(s)

var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelector(".box-space");
var turnMessage = document.querySelector(".player-message");



// Event Listener(s)

gameGrid.addEventListener('click', clickBox);



// Function(s) and Event Handler(s)



function enterToken(box) {
  game.gameArea.splice(box, 1)
}


function clickBox() {
  if (event.target.classList.contains("box-space")) {
    enterToken(event.target.id);
    event.target.innerHTML = `<img class="token" src=${game.currentTurn.token} />`;
    //event.target.classList.remove('hover');
    game.changeTurn();
    changeTurnMessage();
  }
}


function changeTurnMessage() {
  turnMessage.innerText = `It's ${game.currentTurn.id}'s Turn!`;
}





// function clickBox() {
//   console.log('box clicked')
//   if (event.target.classList.contains("box-space")) {
//     if (!game.boxArea.includes(event.target.id)) {
//       game.currentTurn.boxArea.push(event.target.id);
//
//     }
//   }
// }
