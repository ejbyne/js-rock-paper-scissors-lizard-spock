function AutoPlayer(name) {
  this.name = name
};

AutoPlayer.prototype.picks = function() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = choices[Math.floor(choices.length * Math.random())];
};