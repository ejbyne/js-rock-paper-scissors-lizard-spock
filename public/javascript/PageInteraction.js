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

  var strtBlackout = function(){
    $(".msgbox").fadeIn(3000);
    $(".blackout").fadeIn(3000);
  };

  var endBlackout = function(){
    $(".blackout").fadeOut(1500);
    $(".msgbox").toggle("puff");
  };

  var lowerFromTop = function(){
    $('article').animate({top: '+=300px'}, 2000);
  };

  var enterName = function(){
    event.preventDefault();
    var name = $('#text').val();
    human.setName(name);
  };

  var scoreMessage = function(){
    $('#welcome').html(human.name + "'s score: " + game.scores['player1']
      + "<br>" + computer.name + "'s score: " + game.scores['player2']);
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
    scoreMessage();
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