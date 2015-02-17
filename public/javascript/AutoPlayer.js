function AutoPlayer(name) {
  this.name = name
};

AutoPlayer.prototype.picks = function(history) {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = choices[Math.floor(choices.length * Math.random())];
};
