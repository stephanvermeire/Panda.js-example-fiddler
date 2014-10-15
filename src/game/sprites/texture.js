game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('logo1.png');
    game.addAsset('logo2.png');

    game.createScene('Main', {
        init: function() {
            var logo = new game.Sprite('logo1.png');
            this.stage.addChild(logo);
            //Directly replace the default logo with vignet effect
            logo.setTexture('logo2.png');
         }
    });
});
