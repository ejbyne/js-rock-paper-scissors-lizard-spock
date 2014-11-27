$(document).ready(function(){

  var startGame = function(){
    $('#start').click(function() {
      enterName();
      lowerFromTop();
      welcomeMessage();
    });
  };

  var enterName = function(){
    event.preventDefault();
    var name = $('#text').val();
    human.setName(name)
  };

  var lowerFromTop = function(){
    $('article').animate({top: '+=350px'}, 1500);
  };

  var welcomeMessage = function(){
    $('#welcome').html('You are ' + human.name);
  };


  var makePicks = function(){
    $('#choices a').on('click', function(event){
      bounce(this);
      recordPicks(this);
      printResults();
    });
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

  startGame();
  makePicks();
  
})