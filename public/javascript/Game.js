function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
  rock: { lizard: 'crushes', scissors: 'crushes' },
  paper: { rock: 'covers', spock: 'disproves' },
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  lizard: { spock: 'poisons', paper: 'eats' },
  spock: { scissors: 'smashes', rock: 'vapourises' }
};

Game.prototype.winner = function() {
  if (this.player1.pick === this.player2.pick) { return null; }
  if (this.PAIRS[this.player1.pick][this.player2.pick]) { return this.player1; }
  return this.player2;
};

Game.prototype.loser = function() {
  if (this.winner() === null) { return null; }
  if (this.winner() === this.player1) { return this.player2; }
  else { return this.player1; }
};

Game.prototype.victoryMessage = function() {
  if (this.player1.pick === this.player2.pick) return "Draw";
  var verb = this.PAIRS[this.winner().pick][this.loser().pick]
  return (this.winner().name + "'s " + this.winner().pick
    + " " + verb + " " 
    + this.loser().name + "'s " + this.loser().pick);
};

Game.prototype.scores = {
  player1: 0,
  player2: 0
}

Game.prototype.updateScores = function() {
  if (this.winner() === null) {
    return null;
  } else if (this.winner() === this.player1) {
    this.scores['player1'] = (this.scores['player1'] + 1)
  } else {
    this.scores['player2'] = (this.scores['player2'] + 1)
  };
};
