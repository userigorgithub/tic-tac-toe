// Global Variable(s):
var game = new Game();
var gameMusic = new Audio("./assets/solar-tic-tac-toe.mp3");
var musicBtnStatus = false;

// Query Selector(s):
var openingPage = document.querySelector(".opening-page");
var mainPage = document.querySelector(".main-page");
var modal = document.querySelector(".modal");
var gameRulesBtn = document.querySelector(".game-rules-button");
var closeModalBtn = document.querySelector(".close-modal-button");
var startBtn = document.querySelector(".start-game-button");
var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelectorAll(".box-space");
var playerMessage = document.querySelector(".player-message");
var playerOneScore = document.querySelector(".number-of-wins-one");
var playerTwoScore = document.querySelector(".number-of-wins-two");
var resetScoreBtn = document.querySelector(".reset-button");
var musicBtn = document.querySelector(".music-button");

// Event Listener(s):
startBtn.addEventListener('click', startGame);
gameRulesBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
gameGrid.addEventListener('click', clickBox);
resetScoreBtn.addEventListener('click', resetScore);
musicBtn.addEventListener('click', playStopMusic);


// Function(s) and Event Handler(s):
function startGame() {
  hideElement(openingPage);
  showElement(mainPage);
  game.randomizePlayer();
  playStopMusic();
}

function openModal () {
  showElement(modal);
}

function closeModal() {
  hideElement(modal);
}

function clickBox(event) {
  var box = event.target;
  var boxId = event.target.id;
  if (!box.innerHTML && !box.alt) {
    event.target.innerHTML =
    `<img class="token" src=${game.playerTurn.token} alt="planet" />`;
    game.changeBoxStatus(boxId);
    game.changeTurn();
    game.totalTurns += 1;
    changeTurnMessage();
    game.checkWin();
    game.checkDraw();
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
  if (game.playerOne && game.totalTurns <= 8) {
    game.playerOne.wins += 1;
    playerMessage.innerText = `${game.playerOne.id} Wins!`;
  } else {
    game.playerOne.wins += 0.5;
    playerMessage.innerText = `${game.playerOne.id} Wins!`;
  }
}

function marsWinMessage() {
  if (game.playerTwo && game.totalTurns <= 8) {
    game.playerTwo.wins += 1;
    playerMessage.innerText = `${game.playerTwo.id} Wins!`;
  } else {
    game.playerTwo.wins += 0.5;
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

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
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
  resetGame();
}

function playStopMusic() {
  if (!musicBtnStatus) {
    musicBtn.innerText = "Music ON";
    musicBtnStatus = true;
    gameMusic.play();
    gameMusic.loop = true;
  } else {
    musicBtn.innerText = "Music OFF";
    musicBtnStatus = false;
    gameMusic.pause();
  }
}
