$(document).ready(function(){

//This is the function that closes the pop-up

//This is the function that starts the pop-up

//Sets the buttons to trigger the blackout on clicks
// $(document).ready(function(){
// // $("#btn1").click(strtBlackout); // open if btn is pressed
// // $(".blackout").click(endBlackout); // close if click outside of popup
// $(".closeBox").click(endBlackout); // close if close btn clicked

// // Automatically trigger the pop-up after 10 seconds
// // setTimeout( strtBlackout, 0);
// })

  var startBlackout = function strtBlackout(){
  $(".msgbox").fadeIn(3000);
  $(".blackout").fadeIn(3000);
  // setTimeout(strtBlackout, 500);
  };

  var endBlackout = function endBlackout(){
    // $(".blackout").css("display", "none");
    // $(".msgbox").css("display", "none");
    $(".blackout").fadeOut(1500);
    $(".msgbox").toggle("puff");
    // setTimeout(strtBlackout, 500);
  };

  var startGame = function(){
    startBlackout();
    lowerFromTop();
    $('#start').click(function() {
      endBlackout();
      enterName();
      welcomeMessage();
    });
  };

  var enterName = function(){
    event.preventDefault();
    var name = $('#text').val();
    human.setName(name)
  };

  var lowerFromTop = function(){
    $('article').animate({top: '+=350px'}, 2000);
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