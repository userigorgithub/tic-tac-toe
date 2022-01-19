// Global Variable(s):
var game = new Game();

var boxes = Array.from(document.getElementsByClassName("box-space"));
console.log(boxes)

// Query Selector(s):
var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelectorAll(".box-space");
var playerMessage = document.querySelector(".player-message");

// Event Listener(s):
gameGrid.addEventListener('click', clickBox);

// Function(s) and Event Handler(s):

// function refreshBoard() {
//   for (var i = 0; i < boxArea.length; i++) {
//     boxArea[i].innerHTML = '';
//
//   }
//   game.boxes = ['','','','','','','','',''];
// }


function clickBox(event) {
  var box = event.target;
  var boxId = event.target.id;
  if (!box.innerHTML && !box.alt) {
    event.target.innerHTML =
    `<img class="token" src=${game.playerTurn.token} alt="planet" />`;
    game.changeBoxStatus(boxId);
    game.totalTurns++;
    changeTurnMessage();
    game.changeTurn();
    game.checkWin();
    game.checkDraw();
    return;
  }
}

function changeTurnMessage() {
  if (game.playerOne) {
  playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  } else if (game.playerTwo) {
  playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  }
}

function winMessage() {
  playerMessage.innerHTML = `${game.playerTurn.id} Wins!`;
}

function drawMessage() {
  playerMessage.innerText = `NO Player Wins!`;
}

function disableGameGrid() {
  gameGrid.removeEventListener('click', clickBox);
}

function enableGameGrid() {
  gameGrid.addEventListener('click', clickBox);
}
