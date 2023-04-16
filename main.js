// Global Variable(s):
var game = new Game();

// Query Selector(s):
var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelectorAll(".box-space");
var playerMessage = document.querySelector(".player-message");
var playerOneScore = document.querySelector(".number-of-wins-one");
var playerTwoScore = document.querySelector(".number-of-wins-two");
var resetScoreBtn = document.querySelector(".reset-button");

window.addEventListener('load', function() {
  game.randomizePlayer();
})
gameGrid.addEventListener('click', clickBox);
resetScoreBtn.addEventListener('click', resetScore);

// Function(s) and Event Handler(s):
function clickBox(event) {
  // game.randomizePlayer();
  var box = event.target;
  var boxId = event.target.id;
  if (!box.innerHTML && !box.alt) {
    event.target.innerHTML =
    `<img class="token" src=${game.playerTurn.token} alt="planet" />`;
    game.changeBoxStatus(boxId);
    game.totalTurns++;
    game.changeTurn();
    changeTurnMessage();
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
  playerOneScore.innerHTML = `${game.playerOne.wins}`;
  playerTwoScore.innerHTML = `${game.playerTwo.wins}`;
}

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
  game.totalTurns = 0;
  playerMessage.innerText = `It's ${game.playerTurn.id}'s Turn!`;
  game.boxes = ['','','','','','','','',''];
  enableGameGrid();
}

function resetScore() {
  game.clearWins();
  showScore();
  game.randomizePlayer();
}
