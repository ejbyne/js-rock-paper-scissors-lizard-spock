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

Game.prototype.winner = function() {
  var pairs = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  };
  if (this.player1.pick === this.player2.pick) return null;
  if (pairs[this.player1.pick] === this.player2.pick) return this.player1;
  else return this.player2;
};