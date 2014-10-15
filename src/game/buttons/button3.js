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

        init: function() {
			
			//add animated button
			this.button1=new game.Button(150, 150, "click me!", 45, function(){
				//this function is called from within Button so this will refer to the button itself.
				this.text.setStyle({ font: this.fontsize.toString()+'px Arial', fill: "#000000" });
		        var tween = new game.Tween(this);
		        //rotation effect
		        tween.to({rotation:Math.PI*4}, 1000);
		        tween.easing(game.Tween.Easing.Quadratic.InOut);
		        tween.start();
		        //and make it dissappear
		        var tween2 = new game.Tween(this.scale);
		        tween2.to({x:1.2, y:1.2}, 300);
		        tween2.easing(game.Tween.Easing.Quadratic.InOut);
		        var tween3 = new game.Tween(this.scale);
		        tween3.to({x:0, y:0}, 700);
		        tween3.easing(game.Tween.Easing.Quadratic.InOut);
		        tween2.chain(tween3);
		        tween2.start();
			});
		}
    });
});
