game.module(
	'game.main'
)
.require(
	'engine.core'
)
.body(function(){

	game.addAsset('box.png');
	game.addAsset('target.png');

	game.createScene('Main', {	
		init: function() {
			//Add sprite
			var sprite1 = new game.Sprite('target.png', 250, 200);
			this.stage.addChild(sprite1);
			
			//Add another sprite. 
			//It will be on front of the first sprite because it's the last one added to the container.  
			var sprite2 = new game.Sprite('box.png', 270, 250);
			this.stage.addChild(sprite2);

			//Now lets rock and z-order them!
			sprite1.zIndex=2;
			sprite2.zIndex=1;
			this.sort();
		},
		
		depthCompare: function (a, b) {
			if (a.zIndex < b.zIndex) return -1;
			if (a.zIndex > b.zIndex) return 1;
			return 0;
		},
		
		sort: function() {
			//All sprites have been added to game.scene.stage.
			//In order to update the zIndex, you have to sort the following list
			game.scene.stage.children.sort(this.depthCompare);
		}
		
	});
});
