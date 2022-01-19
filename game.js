class Game {
  constructor() {
    this.playerOne = new Player("Player 1", "./assets/planetone-galaxy-svgrepo-com.svg");
    this.playerTwo = new Player("Player 2", "./assets/planettwo-galaxy-svgrepo-com.svg");
    this.playerTurn = this.playerOne;

    this.boxes = ['','','','','','','','',''];

    this.playerEarth = true;
    this.playerMars = false;
    this.totalTurns = 0;

    // this.isWin = false;
    // this.isDraw = false;
    // this.reset = false;

  }

  changeBoxStatus(boxId) {
    var curBox = boxId;
    this.boxes[curBox] = this.playerTurn.token;
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
      winMessage();
      this.playerOne.wins++;
      disableGameGrid();

      return true;

    } else if (mars) {
      winMessage();
      this.playerTwo.wins++;
      disableGameGrid();

      return true;
    }

  }


  checkDraw() {
    if (this.totalTurns === 9) {
      // console.log(drawMessage());
      // hide(playerTurn);
        drawMessage();
        disableGameGrid();
        // setTimeout(resetGame, 2000)
        return true;
    }

  }



//   resetGame() {
//     this.reset = true;
//   }

}
