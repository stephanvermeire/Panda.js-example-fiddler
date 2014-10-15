game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('verylongfilename.png', 'logo');

    game.createScene('Main', {
        init: function() {
            var logo = new game.Sprite('logo');
            this.stage.addChild(logo);
         }
    });
});
