describe("AutoPlayer", function() {

  var autoPlayer;
  
  beforeEach(function() {
    autoPlayer = new AutoPlayer('Computer');
  });

  describe('setting the autoplayer\'s name', function() {

  	it('name is set when initialized', function() {
  		expect(autoPlayer.name).toEqual('Computer');
  	});

  });

  describe('making a pick', function() {

  	it('can randomly pick one of five options', function() {
  		var autoPlayerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      autoPlayer.picks();
      expect(autoPlayerOptions.indexOf(autoPlayer.pick)).not.toBe(-1);
  	});

  });

});
