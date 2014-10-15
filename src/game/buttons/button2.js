game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
	
	game.addAsset('button1a.png');
	game.addAsset('button1b.png');
	
	//========== Button class ==========
	game.createClass('Button', 'Sprite', {
	    interactive: true,
	
	    init: function(x, y, text, fontsize, click, sender) {
			//call parent conmstructor function
	        this._super('button1a.png', x, y);
	        this.anchor.set(0.5, 0.5);
	        this.position={x:x+this.width/2, y:y+this.height/2};
	        
	        
	        game.scene.stage.addChild(this);

	        //text
	        this.fontsize=fontsize;
            this.text = new game.PIXI.Text(text, { font: this.fontsize.toString()+'px Arial' });
            this.text.position.x=-this.text.width/2;
            this.text.position.y=-this.text.height/2;
            this.addChild(this.text);
            //game.scene.stage.addChild(text);
            
			if(click!==undefined){
				if(sender===undefined){
					sender=this;
				}
				this.click=click.bind(sender);
			}
	    },
	
	    mouseover: function() {
	        this.setTexture("button1b.png");
	        this.text.setStyle({ font: this.fontsize.toString()+'px Arial', fill: "#ffffff" });
	    },

	    mouseout: function() {
	        this.setTexture("button1a.png");
	        this.text.setStyle({ font: this.fontsize.toString()+'px Arial', fill: "#000000" });
	    }
	});


	//========== Main ==========
    game.createScene('Main', {
    	counter: 0,
        init: function() {
			//small text
			this.text=new game.PIXI.Text("number of clicks:", {font:"40px Arial", fill: "#ffffff"});
			this.text.position={x: 100, y:300};
			game.scene.stage.addChild(this.text);

			//add button
			this.button1=new game.Button(120, 100, "click me!", 45, this.updateCounter, this);
			
		},
         
        updateCounter: function(){
        	this.counter+=1;
        	this.text.setText("number of clicks: "+ this.counter.toString());
        	
        }
    });
});
