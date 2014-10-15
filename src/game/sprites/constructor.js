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
            var logo = new game.Sprite('logo1.png', 200, 200, {
                alpha: 0.5,
                anchor: { x: 0.5, y: 0.5 }
                }).addTo(this.stage);
         }
    });
});
