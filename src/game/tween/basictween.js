game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Sprite('panda.png');
	        this.stage.addChild(sprite);
	 
	        var tween = new game.Tween(sprite.position);
	        tween.to({x:200}, 1000);
	        tween.start();			
		}
		
	});
});