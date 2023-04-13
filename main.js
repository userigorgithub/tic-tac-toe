// Global Variable(s):
var game = new Game();

// Query Selector(s):
var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelectorAll(".box-space");
var playerMessage = document.querySelector(".player-message");
var playerOneSc = document.querySelector(".number-of-wins-one");
var playerTwoSc = document.querySelector(".number-of-wins-two");

// Event Listener(s):
gameGrid.addEventListener('click', clickBox);

// Function(s) and Event Handler(s):
function clickBox(event) {
  var box = event.target;
  var boxId = event.target.id;
  if (!box.innerHTML && !box.alt) {
    event.target.innerHTML =
    `<img class="token" src=${game.playerTurn.token} alt="planet" />`;
    game.changeBoxStatus(boxId);
    game.totalTurns++;
    game.changeTurn();
    // winMessage();
    changeTurnMessage();
    game.checkWin();
    game.checkDraw();
    return;
  }
}

// function winMessage() {
//   if (game.playerOne) {
//     playerMessage.HTML = `<h2 class="player-message">Player 1 Wins!</h2>`;
//     // playerMessage.innerText = `${game.playerTurn.id} Wins!`;
//   } else if (game.playerTwo) {
//     playerMessage.innerHTML = `<h2 class="player-message">Player 2 Wins!</h2>`;
//     // playerMessage.innerText = `${game.playerTurn.id} Wins!`;
//   }
// }

function earthWinMessage() {
  if (game.playerOne) {
    playerMessage.innerText = `${game.playerOne.id} Wins!`;
  }
}

function marsWinMessage() {
  if (game.playerTwo) {
    playerMessage.innerText = `${game.playerTwo.id} Wins!`;
  }
}

function drawMessage() {
  playerMessage.innerText = `NO Player Wins!`;
}

function showScore() {
  playerOneSc.innerHTML = `${game.playerOne.wins}`;
  playerTwoSc.innerHTML = `${game.playerTwo.wins}`;
}

function changeTurnMessage() {
  if (game.playerOne) {
    playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  } else if (game.playerTwo) {
    playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  }
}

// function changeTurnMessage() {
//   if (game.playerOne) {
//     playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
//   } else {
//     playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
//   }
// }

function disableGameGrid() {
  gameGrid.removeEventListener('click', clickBox);
}

function enableGameGrid() {
  gameGrid.addEventListener('click', clickBox);
}

function resetGame() {
  for (var i = 0; i < boxArea.length; i++) {
    boxArea[i].innerHTML = '';
  }
  // showScore();
  // game.playerEarth = true;
  game.totalTurns = 0;
  // game.changeTurn();
  playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  // changeTurnMessage();
  game.boxes = ['','','','','','','','',''];
  enableGameGrid();
}
