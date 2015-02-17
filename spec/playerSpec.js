describe("Player", function() {

  var player;
  
  beforeEach(function() {
    player = new Player();
  });

  describe('setting the player\'s name', function() {

  	it('name can be set', function() {
  		player.setName('Ed');
  		expect(player.name).toEqual('Ed');
  	});

  });

  describe('making a pick', function() {

  	it('can make a pick', function() {
      player.picks('rock');
      expect(player.pick).toEqual('rock');
  	});

  });

});
