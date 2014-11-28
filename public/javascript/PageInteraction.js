$(document).ready(function(){

  var loadGame = function(){
    strtBlackout();
    lowerFromTop();
  };

  var startGame = function(){
    $('#start').on('click', function(event){
      event.preventDefault();
      endBlackout();
      enterName();
      scoreMessage(game, human, computer);
      return false
    });
  };

  var makePicks = function(){
    $('#choices a').on('click', function(event){
      event.preventDefault();
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
    var name = $('#text').val();
    human.setName(name);
  };

  var bounce = function(item){
    $(item).effect("bounce", {times: 5}, 1000);
  };

  var recordPicks = function(item){
    var picked = $(item).data('pick');
    human.picks(picked);
    computer.picks();
  };
  
  var printResults = function() {
    $(render_result(game)).prependTo('#results').slideDown();
    $('li:nth-child(5)').fadeOut(3000, remove);    
  };

  var printScores = function() {
    game.updateScores();
    scoreMessage(game, human, computer);
  };

  var scoreMessage = function(game, human, computer){
    $('#scorecard').html(render_score(game, human, computer));
  };

  var render_result = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };

  var render_score = function(game, human, computer){
    var html = $('#scorecard-template').html();
    var data = {human_score: (human.name + "'s score: " + game.scores['player1']),
      computer_score: (computer.name + "'s score: " + game.scores['player2'])}
    return Mustache.render(html, data);
  }

  var remove = function(){
    $(this).remove();
  };
  
  var human = new Player();
  var computer = new AutoPlayer('Computer');
  var game = new Game(human, computer);

  loadGame();
  startGame();
  makePicks();
  
})