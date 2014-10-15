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
            //You can do a resize with the scale property
            //normal size
            var logo = new game.Sprite('logo1.png', 100, 100);
            logo.scale.set(1, 1);
            this.stage.addChild(logo);
            //20% enlarged
            var logo2 = new game.Sprite('logo1.png', 300, 100); 
            logo2.scale.set(1.2, 1.2);
            this.stage.addChild(logo2);
         }
    });
});
