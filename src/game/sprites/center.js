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
            //the offset is relative to the center of the screen. Here x:-20, y:10
            logo.center(-40,10);
            this.stage.addChild(logo);
         }
    });
});
