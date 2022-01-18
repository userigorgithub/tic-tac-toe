class Game {
  constructor() {
    this.playerOne = new Player("Player 1", "./assets/planetone-galaxy-svgrepo-com.svg");
    this.playerTwo = new Player("Player 2", "./assets/planettwo-galaxy-svgrepo-com.svg");
    this.playerTurn = this.playerOne;

    this.boxes = ["","","","","","","","",""];

    this.playerEarth = true;
    this.playerMars = false;
    this.totalTurns = 0;

    this.isWin = false;
    this.isDraw = false;
    this.reset = false;

  }

//-------------------------------------------

  // takeTurn(i) {
  //
  // }


  changeBoxStatus(boxId) {
    var curBox = boxId;
    this.boxes[curBox] = this.playerTurn.token;
  }

//keeping track of data


  changeTurn() {
    if (this.playerTurn === this.playerOne) {
      this.playerTurn = this.playerTwo;
    } else if (this.playerTurn === this.playerTwo) {
      this.playerTurn = this.playerOne;
    }

  }


  winPatterns(token) {
    if (this.boxes[0] === token && this.boxes[1] === token && this.boxes[2] === token) {
      this.isWin = true;

      return true;

    } else {
      return false;
    }
  }

  checkWin() {

  }



  // winPatterns(token) {
  //   if (this.boxes[0] === token) {
  //     if (this.boxes[1] === token && this.boxes[2] === token) {
  //       playerMessage.innerText = `gtgbthbth`
  //       console.log(`${token} wins top`);
  //       this.isWin = true;
  //       return true;
  //     }
  //   }
  // }




  checkDraw() {
    if (this.totalTurns === 9) {
      // console.log(drawMessage());
      // hide(playerTurn);
        drawMessage();
    }

  }



  resetGame() {
    this.reset = true;
  }
}
