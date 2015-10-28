game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
            //add text
            var text = new game.Text("Click to stop the tween", { font: '30px Arial', fill: "#000000" });
            text.position={x: 50,y: 400};
            this.stage.addChild(text);
			
	        var sprite = new game.Sprite('panda.png', 200, 50);
	        this.stage.addChild(sprite);
	 
	        this.tween = new game.Tween(sprite.position);
	        this.tween.to({y:300}, 1000);
	        this.tween.repeat();//repeat infinitely
	        this.tween.yoyo();
	        this.tween.start();			
		},
		
		click: function(e){
			this.tween.stop();
		}
		
	});
});