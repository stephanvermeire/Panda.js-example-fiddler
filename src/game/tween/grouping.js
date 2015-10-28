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
	 		
	 		//You can use a TweenGroup to start multiple tweens at once.
	        var group = new game.TweenGroup(function() {
	            console.log('TweenGroup complete');
	        });
	 
	        var tween1 = new game.Tween(sprite.position);
	        tween1.to({x:200}, 1000);
	        
	        var tween2 = new game.Tween(sprite.position);
	        tween2.to({y:200}, 2000);
	 
	        group.add(tween1);
	        group.add(tween2);
	        group.start();	    
	    }
		
	});
});