game.module(
	'game.main'
)
.body(function(){

	game.createClass('Character', {
	    name: '',
	    health: 2,
	 
	    init: function() {
	        console.log('Inited ' + this.name + ' with health ' + this.health);
	    }
	});
	 
	game.createClass('Player', 'Character', {
	    name: 'Player',
	    health: 5,
	});
	 
	game.createClass('Enemy', 'Character', {
	    name: 'Enemy'
	});
	
	game.createScene('Main', {	

		init: function(message) {
			//Hit F12 to see the console
			
			var player = new game.Player(); // Inited Player with health 5
			var enemy = new game.Enemy(); // Inited Enemy with health 2
			
		}
		
	});
});