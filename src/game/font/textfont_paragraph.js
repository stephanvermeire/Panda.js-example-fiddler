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
            var lorem = "Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit.\nAenean commodo ligula eget dolor.";
            var text  = new game.PIXI.Text(lorem, { font: '20px Arial' });
            this.stage.addChild(text);

            var text2  = new game.PIXI.Text(lorem, { font: '20px Arial', align: "right" });
            text2.position.y=100;
            this.stage.addChild(text2);

            var text3  = new game.PIXI.Text(lorem, { font: '20px Arial', align: "center" });
            text3.position.y=200;
            this.stage.addChild(text3);

            var loremlong = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
            var text4  = new game.PIXI.Text(loremlong, { font: '20px Arial', align: "center" });
            text4.position.y=300;
            this.stage.addChild(text4);

            var loremlong = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";
            var text5  = new game.PIXI.Text(loremlong, { font: '20px Arial', wordWrap : true, wordWrapWidth: 400 });
            text5.position.y=350;
            this.stage.addChild(text5);

         }
    });
});
