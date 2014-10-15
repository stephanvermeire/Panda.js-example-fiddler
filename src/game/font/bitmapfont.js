game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    //You have to load a bitmap font before you can use it.
    //A bitmap font consists of an atlas file (arialrnd.fnt, the index) and a spritesheet file (arialrnd.png).
    game.addAsset('wallfont.fnt');

    game.createScene('Main', {
        init: function() {
            //add text
            var text = new game.BitmapText("Hello World!", { font: '80px wallfont' });
            //text.position.x = 100;
            //text.position.y = 100;
            this.stage.addChild(text);
         }
    });
});


