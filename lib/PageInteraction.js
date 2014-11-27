$(document).ready(function(){
        var computer = new AutoPlayer('Computer');
        var human = new Player('Chris');
        var game = new Game(computer, human);
        $('article').animate({top: '+=350px'}, 1500);
        $('#welcome').html('You are ' + human.name);
        $('#choices a').on('click', function(event){
          event.preventDefault();
          $(this).effect("bounce", {times: 5}, 1000);
          var picked = $(this).data('pick');
          human.picks(picked);
          computer.picks();
          var rendered = Mustache.render($('#list-item-template').html(), {message: game.victoryMessage()});
          $(rendered).prependTo('#results').slideDown();
          $('li:nth-child(5)').fadeOut(3000, function(){
            $(this).remove();
          });
        });
      })