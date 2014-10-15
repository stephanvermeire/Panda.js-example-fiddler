game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('box.png');

    game.createScene('Main', {
        init: function() {
        	
            //add text
            this.text = new game.Text("Click the sprite", { font: '30px wallfont', fill: "#ffffff" });
            this.text.position={x: 50,y: 50};
            this.stage.addChild(this.text);

            var sprite1 = new game.Sprite('box.png', 150, 150);
            this.stage.addChild(sprite1);

            //in order to capture a mouse click, you have to set interactive to true and add an eventhandler.
            sprite1.interactive=true;
            sprite1.click=function(){
            	console.log("sprite received a click!");
            	game.scene.textresult.setText("sprite received a click!");
            };
            
        	//note that above we can't use 'this' without binding the eventhandler to the scene object.
        	//Either use game.scene like the previous example or bind the eventhandler to game.scene as shown below:
            /*sprite1.click=function(){
            	this.textresult.setText("sprite received a click!");
            }.bind(this);// */
           

            //add text
            this.textresult = new game.Text("", { font: '30px wallfont', fill: "#ffffff" });
            this.textresult.position={x: 50,y: 400};
            this.stage.addChild(this.textresult);

        },
        
        click: function(e){
        	console.log("canvas received a click!");
        	this.textresult.setText("canvas received a click!");
        }

        
    });
});
