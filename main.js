// Global Variable(s):

var game = new Game();

var boxes = Array.from(document.getElementsByClassName("box-space"));
console.log(boxes)

// Query Selector(s):


var gameGrid = document.querySelector(".game-grid");
var boxArea = document.querySelectorAll(".box-space");
var playerMessage = document.querySelector(".player-message");



// Event Listener(s):

// window.addEventListener('load', refreshBoard);

gameGrid.addEventListener('click', clickBox);



// Function(s) and Event Handler(s):

// function refreshBoard() {
//   for (var i = 0; i < boxArea.length; i++) {
//     boxArea[i].innerHTML = '';
//
//   }
//   game.boxes = ['','','','','','','','',''];
// }
//
//
// function clickBox(e) {
//   var boxId = e.target.id;
//   if (!game.boxes[boxId]) {
//     this.boxes[boxId] = playerTurn;
//     e.target.innerText = playerTurn;
//     game.changeTurn();
//   }
// }


function clickBox(event) {
  var box = event.target;
  var boxId = event.target.id;
  if (!box.innerHTML && !box.alt) {
    event.target.innerHTML =
    // `${game.playerTurn.token}`;


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



// function enterToken(box) {
//   game.boxes.splice(box, 1)
// }
//
// function clickBox(event) {
//   if (event.target.classList.contains("box-space")) {
//     enterToken(event.target.id);
//     event.target.innerHTML = `<img class="token" src=${game.playerTurn.token} />`;
//     // event.target.classList.remove('hover');
//     game.changeTurn();
//     changeTurnMessage();
//     game.checkWin();
//     return;
//   }
// }


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


// function clickBox() {
//   console.log('box clicked')
//   if (event.target.classList.contains("box-space")) {
//     if (!game.boxArea.includes(event.target.id)) {
//       game.currentTurn.boxArea.push(event.target.id);
//
//     }
//   }
// }
