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
        	
            //add text
            this.text = new game.Text("The sprite in front captures the click event.\n(Hit F12 to see the console:\n Note that canvas is always triggered)", { font: '30px wallfont', fill: "#ffffff", align:"center" });
            this.text.position={x: 50,y: 10};
            this.stage.addChild(this.text);

            var sprite1 = new game.Sprite('target.png', 250, 200);
            sprite1.interactive=true;
            sprite1.hitArea = new game.PIXI.Circle(sprite1.width/2, sprite1.height/2, sprite1.width/2);
            sprite1.click=function(){
            	console.log("target received a click!");
            	this.textresult.setText("target received a click!");
            }.bind(this);
            this.stage.addChild(sprite1);
           
            var sprite2 = new game.Sprite('box.png', 200, 150);
            sprite2.interactive=true;
            sprite2.click=function(){
            	console.log("box received a click!");
            	this.textresult.setText("box received a click!");
            }.bind(this);
            this.stage.addChild(sprite2);
           

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
