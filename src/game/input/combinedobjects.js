game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('box.png');

	//========== Sprite based box class with text ==========
	game.createClass('Box', 'Sprite', {
	    interactive: true,
	
	    init: function(x, y) {
			//call parent constructor function
	        this._super('box.png', x, y);
	        game.scene.stage.addChild(this);

	        //text
            this.text = new game.PIXI.Text("hit text\n or box", { font: '30px Arial' });
            this.text.position = {x: 10, y:10};
            this.text.interactive=true;
            this.text.click = function() {
	        	console.log("text on box clicked");
	    	};
			//Text is added as a child to the boxclass
            this.addChild(this.text);
	    },

	    click: function() {
	        console.log("box itself clicked");
	    }
	});
	

    game.createScene('Main', {
        init: function() {
        	
            //add instructions
            this.text = new game.Text("Press F12 to see the console", { font: '30px wallfont', fill: "#ffffff" });
            this.text.position={x: 50,y: 50};
            this.stage.addChild(this.text);

        	var box = new game.Box(200,150);
        	
        },
        
        click: function(e){
        	console.log("canvas clicked");
        }

        
    });
});
