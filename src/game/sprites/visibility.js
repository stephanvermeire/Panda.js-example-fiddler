game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('logo1.png');

    game.createScene('Main', {
        init: function() {
            var logo = new game.Sprite('logo1.png');
            logo.visible = false;
            this.stage.addChild(logo);
         }
    });
});
