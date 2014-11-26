function Player(name) {
  this.name = name;
  // this.history = [];
};

Player.prototype.picks = function(pick) {
  this.pick = pick
  // this.history.push(pick);
};