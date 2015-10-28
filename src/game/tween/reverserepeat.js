game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Sprite('panda.png', 200, 50);
	        this.stage.addChild(sprite);
	 
	        var tween = new game.Tween(sprite.position);
	        tween.to({y:300}, 1000);
	        tween.repeat(2);//repeat 2 times
	        tween.yoyo();
	        tween.start();			
		}
		
	});
});