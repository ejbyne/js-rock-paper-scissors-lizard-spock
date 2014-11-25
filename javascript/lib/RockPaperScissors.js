function Player(name) {
  this.name = name;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

function AutoPlayer() {};

Player.prototype.picks = function(pick) {
  this.pick = pick
};

AutoPlayer.prototype.picks = function() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = choices[Math.floor(choices.length * Math.random())];
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

Game.prototype.loser = function() {
  if (this.winner() === this.player1) return this.player2
  else return this.player1
};

Game.prototype.VERBS = {
  rock: { lizard: 'crushes', scissors: 'crushes' },
  paper: { rock: 'covers', spock: 'disproves' },
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  lizard: { spock: 'poisons', paper: 'eats' },
  spock: { scissors: 'smashes', rock: 'vapourises' }
};

Game.prototype.victoryMessage = function() {
  var verb = this.VERBS[this.winner().pick][this.loser().pick]
  return (this.winner().name + "'s " + this.winner().pick + " " + verb + " " + this.loser().name + "'s " + this.loser().pick);
};
