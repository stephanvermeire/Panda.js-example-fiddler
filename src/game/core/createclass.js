game.module(
	'game.main'
)
.body(function(){

	//create a class. 
	//(Please note that the constructor function of the class will be located in the game namepace).
	game.createClass('MyClass', {
	    init: function() {
	        console.log('Class initiated');
	    }
	});

	game.createScene('Main', {	

		init: function(message) {
			//Hit F12 to see the console
			// Create new instance of class
			var test = new game.MyClass();
			
		}
		
	});
});