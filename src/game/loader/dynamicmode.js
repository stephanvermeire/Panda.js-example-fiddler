game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

	//No assets are preloaded!

    game.createScene('Main', {

	    init: function() {
	        // Add image to loader queue
	        game.addAsset('logo1.png');
	 
	        var loader = new game.Loader();
	        loader.onComplete(this.loaded.bind(this));
	        loader.start();
	    },
	 
	    loaded: function() {
			var logo = new game.Sprite('logo1.png');
            this.stage.addChild(logo);	    
        }
	    
    });
});
