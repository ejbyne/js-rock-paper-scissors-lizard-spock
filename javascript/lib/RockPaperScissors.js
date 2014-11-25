function Player(name) {
  this.name = name;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Player.prototype.picks = function(pick) {
  this.pick = pick
};

Game.prototype.PAIRS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

Game.prototype.winner = function() {
  if (this.player1.pick === this.player2.pick) return null;
  if (this.PAIRS[this.player1.pick].indexOf(this.player2.pick) > -1 ) return this.player1 
  return this.player2
};

