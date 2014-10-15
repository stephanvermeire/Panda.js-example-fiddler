//===============================================================================
//======== Do you see a black screen? OK, the remove function works! :) =========
//===============================================================================

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
            logo.addTo(this.stage);
            //Alternatively you could do:
            //this.stage.addChild(logo);
            
            //Now remove it from the stage so it won't be displayed anymore
            logo.remove(this.stage);
         }
    });
});
