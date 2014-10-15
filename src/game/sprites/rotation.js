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
            logo.rotation = 0.2;
            //Set anchor in the center
            //logo.anchor.set(0.5, 0.5);
            this.stage.addChild(logo);
         }
    });
});
