game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

	//========== Button class ==========
	game.createClass('Button1', 'Graphics', {
	    interactive: true,
	
	    init: function(x, y, width, height, text, fontsize, click, sender) {
			//call parent conmstructor function
	        this._super();
	        this.hitArea = new game.PIXI.Rectangle(0, 0, width, height);
	        this.pivot={x:width/2, y:height/2};
	        this.position={x:x+width/2, y:y+height/2};
	        
			//draw shape
			var rounding=Math.round(height/4);
			var linewidth=4;
			this.lineStyle (linewidth, 0xffffff);
            this.beginFill(0x00cc00, 1);
            //change linestyle and draw circle
            this.drawCircle(rounding, rounding, rounding);   //x, y, radius
            this.drawCircle(width-rounding, rounding, rounding);   //x, y, radius
            this.drawCircle(width-rounding, height-rounding, rounding);   //x, y, radius
            this.drawCircle(rounding, height-rounding, rounding);   //x, y, radius
			//background
            this.lineStyle (false);
            this.drawCircle(rounding, rounding, rounding-linewidth);   //x, y, radius
            this.drawCircle(width-rounding, rounding, rounding-linewidth);   //x, y, radius
            this.drawRect(rounding, 0, width-2*rounding, height);
            this.drawRect(0, rounding, width, height-2*rounding);
            this.endFill();
			//lines
			this.lineStyle (linewidth, 0xffffff);
	        this.moveTo(rounding, 0);
	        this.lineTo(width-rounding, 0);
	        this.moveTo(width,rounding);
	        this.lineTo(width, height-rounding);
	        this.moveTo(width-rounding,height);
	        this.lineTo(rounding, height);
	        this.moveTo(0,height-rounding);
	        this.lineTo(0, rounding);
	        //extra, some shading
	        this.lineStyle (false);
            this.beginFill(0xffffff, 0.4);
            this.drawEllipse (width/2, height/5, width/2-rounding,height/10);   //x, y, radius
            this.endFill();
	        
	        game.scene.stage.addChild(this);

	        //text
            var text = new game.PIXI.Text(text, { font: fontsize.toString()+'px Arial' });
            text.position.x=(width-text.width)/2;
            text.position.y=(height-text.height)/7*4;
            this.addChild(text);
            //game.scene.stage.addChild(text);
            
			if(click!==undefined){
				if(sender===undefined){
					sender=this;
				}
				this.click=click.bind(sender);
			}
	    },
	
	    mouseover: function() {
	        this.scale={x:1.1, y:1.1};
	    },

	    mouseout: function() {
	        this.scale={x:1.0, y:1.0};
	    }
	});


	//========== Main ==========
    game.createScene('Main', {
    	counter: 0,
        init: function() {
			//small text
			this.text=new game.PIXI.Text("!", {font:"40px Arial", fill: "#ffffff"});
			this.text.position={x: 100, y:300};
			game.scene.stage.addChild(this.text);

			this.button1=new game.Button1(100, 30, 300, 100, "Click me!", 50, this.updateCounter, this);
			this.updateCounter();
		},
         
        updateCounter: function(){
        	this.counter+=1;
        	this.text.setText("number of clicks: "+ this.counter.toString());
        	
        }
    });
});
