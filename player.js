class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  addWins() {
    this.wins++;
    return this.wins;
  }
}
