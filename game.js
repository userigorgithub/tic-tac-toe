class Game {
  constructor() {
    this.playerOne = new Player("Player 1", "./assets/planetone-galaxy-svgrepo-com.svg");
    this.playerTwo = new Player("Player 2", "./assets/planettwo-galaxy-svgrepo-com.svg");
    this.playerTurn = this.playerOne;
    this.boxes = ['','','','','','','','',''];
    this.totalTurns = 0;
  }

  randomizePlayer() {
    var randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber === 1) {
      this.playerTurn = this.playerOne;
    } else {
      this.playerTurn = this.playerTwo;
    }
  }

  changeBoxStatus(boxId) {
    var currentBox = boxId;
    this.boxes[currentBox] = this.playerTurn.token;
  }

  changeTurn() {
    if (this.playerTurn === this.playerOne) {
      this.playerTurn = this.playerTwo;
    } else if (this.playerTurn === this.playerTwo) {
      this.playerTurn = this.playerOne;
    }
  }

  winPatterns(i) {
    if (this.boxes[0] === i && this.boxes[1] === i && this.boxes[2] === i || this.boxes[3] === i && this.boxes[4] === i && this.boxes[5] === i || this.boxes[6] === i && this.boxes[7] === i && this.boxes[8] === i || this.boxes[0] === i && this.boxes[3] === i && this.boxes[6] === i || this.boxes[1] === i && this.boxes[4] === i && this.boxes[7] === i || this.boxes[2] === i && this.boxes[5] === i && this.boxes[8] === i || this.boxes[0] === i && this.boxes[4] === i && this.boxes[8] === i || this.boxes[2] === i && this.boxes[4] === i && this.boxes[6] === i) {
      return true;
    } else {
      return false;
    }
  }

  checkWin() {
    var earth = this.winPatterns(`${this.playerOne.token}`);
    var mars = this.winPatterns(`${this.playerTwo.token}`);
    if (earth) {
      this.playerOne.wins++;
      earthWinMessage();
      showScore();
      disableGameGrid();
      setTimeout(resetGame, 2000);
      return true;
    } else if (mars) {
      this.playerTwo.wins++;
      marsWinMessage();
      showScore();
      disableGameGrid();
      setTimeout(resetGame, 2000);
      return true;
    }
  }

  checkDraw() {
    if (this.totalTurns === 9 && !this.checkWin()) {
      drawMessage();
      showScore();
      disableGameGrid();
      setTimeout(resetGame, 2000);
      return true;
    }
  }

  clearWins() {
    this.playerOne.wins = 0;
    this.playerTwo.wins = 0;
  }
}
