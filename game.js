class Game {
  constructor() {
    this.playerOne = new Player("one", "./assets/planetone-galaxy-svgrepo-com.svg");
    this.playerTwo = new Player("two", "./assets/planettwo-galaxy-svgrepo-com.svg");

    this.gameArea = ["","","","","","","","",""];
    this.currentTurn = this.playerOne;



    this.draw = false;
    this.reset = false;

  }

//keeping track of data



  changeTurn() {
    if (this.currentTurn === this.playerOne) {
      this.currentTurn = this.playerTwo;
    } else if (this.currentTurn === this.playerTwo) {
      this.currentTurn = this.playerOne;
    }



    // this.playerOne = !this.playerOne;
  }

  isWin() {

  }

  isDraw() {

  }

  resetGame() {
    this.reset = true;
  }
}
