function AutoPlayer(name) {
  this.name = name
};

// Autoplayer.prototype.humanFavourite = function(array, history) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (i === j) {
//         return i
//       }
//     }
//   }
//   return null
// }

AutoPlayer.prototype.picks = function(history) {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  this.pick = choices[Math.floor(choices.length * Math.random())];
};