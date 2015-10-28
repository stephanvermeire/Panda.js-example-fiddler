game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createClass("Panda", "Sprite", {
		init: function(){
			this._super("panda.png", 100, 50);
			this.anchor.set(0.5, 0.5);
	        game.scene.stage.addChild(this);
			
			//Now add some tweens...
	        var tween1 = new game.Tween(this.position);
	        tween1.delay(1000);
	        tween1.to({x:200}, 1000);
	        tween1.easing(game.Tween.Easing.Quadratic.InOut);
	        tween1.onComplete(function(){
	        	console.log("spawn new panda");
	        	var panda = new game.Panda();
	        });
	        
	        var tween2 = new game.Tween(this.position);
	        tween2.easing(game.Tween.Easing.Bounce.Out);
	        tween2.to({y:200}, 1000);
			
	        var tween3 = new game.Tween(this.position);
	        //Note that x is the movement from to the starting position of x before ALL tweens were started!!
	        tween3.to({x:500}, 1500);
	        //Notice the difference between the method we user here and on tween1.
	        //In this case we linked the callback function directly.
	        tween3.onCompleteCallback = function(){
	        	this.remove();
	        }.bind(this);
			
	        var tween4 = new game.Tween(this);
	        //Note that x is the movement from to the starting position of x before ALL tweens were started!!
	        tween4.to({rotation:2*Math.PI}, 1500);
			
			//chain the whole lot and get started
			tween1.chain(tween2);
			tween2.chain(tween3, tween4);
			tween1.start();

		},
		
		remove: function(){
			//kill this fellow!
			game.scene.stage.removeChild(this);
		}
	});

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Panda();
	    }
		
	});
});