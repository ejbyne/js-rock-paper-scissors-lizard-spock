function Player() {
  this.name = prompt("Please enter your name");
  // this.history = [];
};

Player.prototype.picks = function(pick) {
  this.pick = pick
  // this.history.push(pick);
};