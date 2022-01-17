class Game {
  constructor() {
    this.playerOne = new Player("one", "token-one");
    this.playerTwo = new Player("two", "token-two");
    this.turn = this.playerOne;

    this.reset = false;

  }

//keeping track of data

  isTurn() {
    this.playerOne = !this.playerOne;
  }

  isWin() {

  }

  isDraw() {

  }

  resetGame() {
    this.reset = true;
  }
}
