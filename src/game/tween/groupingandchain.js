game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
	        var sprite = new game.Sprite('panda.png', 100, 50);
	        sprite.alpha=0.2;
	        this.stage.addChild(sprite);
	 		
	 		//For demonstration purpose only. 
	 		//It is probably better to use just chained tweens. See also the complex chain example.
	 		
	        var group = new game.TweenGroup(function() {
	            console.log('TweenGroup complete');
	        });
	 
	        var tween0 = new game.Tween(sprite);
	        tween0.to({alpha:1}, 1000);

	        var tween1 = new game.Tween(sprite.position);
	        tween1.to({x:200}, 1000);

	        
	        var tween2 = new game.Tween(sprite.position);
	        tween2.to({y:200}, 2000);
	 
	        group.add(tween1);
	        group.add(tween2);
	        tween0.chain(group);
	        tween0.start();	    
	    }
		
	});
});