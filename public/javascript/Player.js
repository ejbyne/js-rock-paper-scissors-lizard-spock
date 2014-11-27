function Player() {
  // this.name = name
  // this.name = prompt("Please enter your name");
  // this.history = [];
};

Player.prototype.picks = function(pick) {
  this.pick = pick
  // this.history.push(pick);
};

Player.prototype.setName = function(name) {
  this.name = name
}