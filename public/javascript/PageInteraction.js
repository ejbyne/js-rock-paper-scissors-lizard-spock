$(document).ready(function(){

  var welcomeMessage = function(){
    $('#welcome').html('You are ' + human.name);
  };

  var lowerFromTop = function(){
    $('article').animate({top: '+=350px'}, 1500);
  };

  var bounce = function(item){
    event.preventDefault();
    $(item).effect("bounce", {times: 5}, 1000);
  };

  var runGame = function(){
    $('#choices a').on('click', function(event){
      bounce(this);
      makePicks(this);
      printResults();
    });
  };

  var makePicks = function(item){
    var picked = $(item).data('pick');
    human.picks(picked);
    computer.picks();
  };
  
  var render = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };

  var printResults = function() {
    $(render(game)).prependTo('#results').slideDown();
    $('li:nth-child(5)').fadeOut(3000, remove);    
  };

  var remove = function(){
    $(this).remove();
  };
  
  var computer = new AutoPlayer('Computer');
  
  var human = new Player('Chris');
  
  var game = new Game(computer, human);
  
  lowerFromTop();
  welcomeMessage();
  runGame();
  
})