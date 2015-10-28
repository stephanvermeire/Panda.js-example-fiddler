game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Sprite('panda.png', 100, 50);
	        this.stage.addChild(sprite);
	 
	        var tween1 = new game.Tween(sprite.position);
	        tween1.to({x:200}, 1000);
	        
	        var tween2 = new game.Tween(sprite.position);
	        tween2.to({y:200}, 1000);
	        
	        tween1.chain(tween2);
	        tween1.start();		
	    }
		
	});
});