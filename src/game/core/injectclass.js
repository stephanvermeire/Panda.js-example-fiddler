game.module(
	'game.main'
)
.body(function(){

	//============= EXAMPLE 1 ===============  
	game.createClass('Player', {
	    greet: function(){
	    	console.log("Player wishes you ");
	    }
	});

	//With inject you can add functionality to an existing class
	game.Player.inject({
	    greet: function(){
	    	console.log("good morning");
	    }
	});

	//So why use inject? Because you preserve the original functionality!
	//You can access it with this._super();

	//============= EXAMPLE 2 ===============  
	game.createClass('Enemy', {
	    greet: function(){
	    	console.log("Enemy wishes you ");
	    }
	});

	game.Enemy.inject({
	    greet: function(){
	    	this._super();
	    	console.log("a bad breath");
	    }
	});

	game.createScene('Main', {	

		init: function(message) {
			//Hit F12 to see the console

			var player = new game.Player();
			player.greet();//Good morning
			
			var enemy = new game.Enemy();
			enemy.greet();//Enemy wishes you a bad breath
			
		}
		
	});
});