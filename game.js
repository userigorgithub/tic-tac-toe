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

  isTurn() {


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
