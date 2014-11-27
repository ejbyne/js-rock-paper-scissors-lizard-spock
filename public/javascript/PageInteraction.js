$(document).ready(function(){

  var loadGame = function(){
    strtBlackout();
    lowerFromTop();
  };

  var startGame = function(){
    $('#start').click(function() {
      endBlackout();
      enterName();
      welcomeMessage();
    });
  };

  var makePicks = function(){
    $('#choices a').on('click', function(event){
      bounce(this);
      recordPicks(this);
      printResults();
      printScores();
    });
  };

  function strtBlackout(){
    $(".msgbox").fadeIn(3000);
    $(".blackout").fadeIn(3000);
  };

  function endBlackout(){
    $(".blackout").fadeOut(1500);
    $(".msgbox").toggle("puff");
  };

  var lowerFromTop = function(){
    $('article').animate({top: '+=300px'}, 2000);
  };

  var enterName = function(){
    event.preventDefault();
    var name = $('#text').val();
    human.setName(name)
  };

  var welcomeMessage = function(){
    $('#welcome').html('You are ' + human.name);
  };

  var bounce = function(item){
    event.preventDefault();
    $(item).effect("bounce", {times: 5}, 1000);
  };

  var recordPicks = function(item){
    var picked = $(item).data('pick');
    human.picks(picked);
    computer.picks();
  };
  
  var printResults = function() {
    $(render(game)).prependTo('#results').slideDown();
    $('li:nth-child(5)').fadeOut(3000, remove);    
  };

  var printScores = function() {
    game.updateScores();
    console.log(game.scores['player1']);
    console.log(game.scores['player2']);
    // $('#results').prepend(human.name + ': ' + game.scores[player1]);
    // $('#results').prepend(computer.name + ': ' + game.scores[player2]);
  };

  var render = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };

  var remove = function(){
    $(this).remove();
  };
  
  var human = new Player();
  var computer = new AutoPlayer('Computer');
  var game = new Game(computer, human);

  loadGame();
  startGame();
  makePicks();
  
})