game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Sprite('panda.png', 200,50);
	        this.stage.addChild(sprite);
	 
	        var tween = new game.Tween(sprite.position);
	        tween.to({y:300}, 1000);
	        tween.easing(game.Tween.Easing.Quadratic.InOut);
	        //Alternatively you could use:
	        //tween.easing(game.Tween.Easing.Quadratic.In);
	        //tween.easing(game.Tween.Easing.Quadratic.Out);
	        //or...
	        //tween.easing(game.Tween.Easing.Cubic.In); 		//In Out InOut
	        //tween.easing(game.Tween.Easing.Quartic.In);		//In Out InOut
	        //tween.easing(game.Tween.Easing.Quintic.In);		//In Out InOut
	        //tween.easing(game.Tween.Easing.Sinusoidal.InOut);	//In Out InOut
	        //tween.easing(game.Tween.Easing.Exponential.In);	//In Out InOut
	        //tween.easing(game.Tween.Easing.Circular.In);		//In Out InOut
	        //These are especially fun to try!
	        //tween.easing(game.Tween.Easing.Elastic.In);		//In Out InOut
	        //tween.easing(game.Tween.Easing.Back.In);			//In Out InOut
	        //tween.easing(game.Tween.Easing.Bounce.Out);		//In Out InOut
	        tween.start();			
		}
		
	});
});