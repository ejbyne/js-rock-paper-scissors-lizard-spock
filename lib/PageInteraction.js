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
          // var history = $.map($('#results').children(), function(li) {
          //   return $(li).data('human-pick');
          // });
          // console.log(history);
          human.picks(picked);
          computer.picks();
          // var ai_choice = computer.choose();
          // computer.picks(ai_choice);
          $('<li data-human-pick="' + picked + '">' + game.victoryMessage() + '</li>').prependTo('#results').slideDown();
          $('li:nth-child(5)').fadeOut(3000, function(){
            $(this).remove();
          });
        });
      })