class Game {
  constructor(player) {
    this.id = Date.now();
    this.player = player;

    this.playerOneTurn = false;
    this.reset = false;
  }

//keeping track of data

  isPlayerTurn() {
    this.playerOneTurn = !this.playerOneTurn;
  }

  isPlayerWin() {


  }

  isPlayerDraw() {


  }

  resetGame() {
    this.reset = true;
  }
}
