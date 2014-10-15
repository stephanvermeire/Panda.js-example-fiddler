game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('logo1.png');
    game.addAsset('shield.png');
    game.addAsset('box.png');
    game.addAsset('target.png');

    game.createScene('Main', {
        init: function() {
        	
            
            //create clickable text
            this.text = new game.Text("Click me", { font: '60px wallfont', fill: "#ffffff", align:"center" });
            this.text.position={x: 150,y: 150};
            this.text.interactive=true;
            this.text.click=function(){
            	console.log("text received a click!");
            	game.scene.textresult.setText("text received a click!");
            };
            this.stage.addChild(this.text);

            //create clickable graphics object
            this.graphics = new game.Graphics();
            this.graphics.position={x: 160,y: 250};
            //in order to make graphics clickable, you have to set the hitarea
            this.graphics.hitArea = new game.PIXI.Rectangle(0, 0, 200, 100);//x, y, width, height
            this.graphics.interactive=true;
            this.graphics.beginFill(0x00cc00, 1);
            this.graphics.drawRect(0, 0, 200, 100);
            this.graphics.endFill();
            this.graphics.click=function(){
            	console.log("graphics received a click!");
            	game.scene.textresult.setText("graphics received a click!");
            };
            this.stage.addChild(this.graphics);


            //response
            this.textresult = new game.Text("", { font: '30px wallfont', fill: "#ffffff" });
            this.textresult.position={x: 50,y: 400};
            this.stage.addChild(this.textresult);

        },
        
        click: function(e){
        	this.textresult.setText("");
        }

        
    });
});
