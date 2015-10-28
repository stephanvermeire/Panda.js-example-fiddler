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
	    init: function(){
	    	console.log("Alternative message from Player");
	    }
	});
	 
	game.createClass('Enemy', 'Character', {
	    name: 'Enemy',
	    init: function(){
	    	this._super(); //This statement calls the init function of the parent class
	    	console.log("Alternative message from Enemy");
	    }
	});

	
	game.createScene('Main', {	

		init: function(message) {
			//Hit F12 to see the console
			
			var player = new game.Player(); // Alternative message from Player
			var enemy = new game.Enemy(); // Inited Enemy with health 2 Alternative message from Player. 

		}
	});
});