game.module(
    'game.main'
)
.body(function(){

    //Basic font uses the fonts that are already installed on the device.
    //So there is no need to load anything. :)

    game.createScene('Main', {
        backgroundColor: 0xeeeeee,
        init: function() {
            //add text
            var text  = new game.PIXI.Text("Arial 20px", { font: '20px Arial' });
            this.stage.addChild(text);

            var text2 = new game.PIXI.Text("Comic Sans MS 20px", { font: '20px Comic Sans MS' });
            text2.position.y=30;
            this.stage.addChild(text2);

            var text3 = new game.PIXI.Text("fill: \'#ff3366\'", { font: '20px Comic Sans MS', fill: "#ff3366"});
            text3.position.y=60;
            this.stage.addChild(text3);

            var text4 = new game.PIXI.Text("stroke: \'#ff3366\'", { font: '20px Comic Sans MS', stroke: '#ff3366', strokeThickness:2});
            text4.position.y=90;
            this.stage.addChild(text4);

            var text5 = new game.PIXI.Text("dropshadow", { 
                font: '40px Comic Sans MS', 
                dropShadow: true,
                dropShadowColor: '#aaaaff', 
                dropShadowAngle:Math.PI/4, 
                dropShadowDistance: 5
            });
            text5.position.y=120;
            this.stage.addChild(text5);

         }
    });
});
