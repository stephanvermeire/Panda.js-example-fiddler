game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('shield.png');

    game.createScene('Main', {
        init: function() {
        	
            //add text
            this.text = new game.Text("Click the sprite (or the canvas).\nNote that the invisible edges are non-responsive.", { font: '30px wallfont', fill: "#ffffff", align:"center" });
            this.text.position={x: 10,y: 50};
            this.stage.addChild(this.text);

            var sprite1 = new game.Sprite('shield.png', 200, 150);
            this.stage.addChild(sprite1);
            
            //set hitarea manually for circle shape
            sprite1.hitArea = new game.PIXI.Polygon(
            	0,0,
            	149,0,
            	140,110,
            	75,186,
            	10,110,
            	0,0
			);

            sprite1.interactive=true;
            sprite1.click=function(){
            	console.log("sprite received a click!");
            	this.textresult.setText("sprite received a click!");
            }.bind(this);
           

            //add text
            this.textresult = new game.Text("", { font: '30px wallfont', fill: "#ffffff" });
            this.textresult.position={x: 50,y: 400};
            this.stage.addChild(this.textresult);

        },
        
        click: function(e){
        	console.log("canvas received a click!");
        	this.textresult.setText("");
        }

        
    });
});
