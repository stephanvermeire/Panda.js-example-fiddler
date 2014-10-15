game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.createScene('Main', {
        init: function() {
        	
            //add instructions
            this.text = new game.Text("Click canvas", { font: '30px wallfont', fill: "#ffffff" });
            this.text.position={x: 50,y: 50};
            this.stage.addChild(this.text);

            //add response textbox
            this.textresponse = new game.Text("", { font: '30px wallfont', fill: "#ffffff" });
            this.textresponse.position={x: 50,y: 200};
            this.stage.addChild(this.textresponse);

        },
        
        click: function(e){
        	console.dir(e);
        	this.textresponse.setText("canvas received a click!");
        	
        }

        
    });
});
