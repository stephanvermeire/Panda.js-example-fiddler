game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

	//This asset is preloaded before the engine really starts the game
    game.addAsset('logo1.png');

    game.createScene('Main', {
        init: function() {
            var logo = new game.Sprite('logo1.png');
            this.stage.addChild(logo);
         }
    });
});
