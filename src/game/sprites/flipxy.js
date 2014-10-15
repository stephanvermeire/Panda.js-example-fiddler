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
            var logo = new game.Sprite('logo1.png', 200,200);
            //flip x (mirror)
            logo.scale.set(-1, 1);
            //flip y 
            //logo.scale.set(1, -1);
            this.stage.addChild(logo);
         }
    });
});
