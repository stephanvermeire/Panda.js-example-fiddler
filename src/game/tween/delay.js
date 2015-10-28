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
	        tween.delay(1000);//start after 1000 ms
	        tween.start();			
		}
		
	});
});