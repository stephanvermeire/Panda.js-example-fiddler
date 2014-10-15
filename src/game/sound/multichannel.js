game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
	
	//In panda.js it is possible to play 1 music file and several sound files at the same time.
	//(Usually you have some background music and several arcade like sound effects running on top of it)
	//For this demo I used the playSound() function only
	
	game.addAsset('button1a.png');
    game.addAudio('sound/song1.*', 'song1');
    game.addAudio('sound/song2.*', 'song2');
    game.addAudio('sound/clear.*', 'clear');
	
	//========== Simple button class ==========
	game.createClass('Button', 'Sprite', {
	    interactive: true,
	
	    init: function(x, y, text, fontsize, click, sender) {
			//call parent constructor function
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
	    
	    setText: function(text){
	    	this.text.setText(text);
            this.text.position.x=-this.text.width/2;
            this.text.position.y=-this.text.height/2;
	    }
	    
	});


	//========== Main ==========
    game.createScene('Main', {
    	counter: 0,
        init: function() {
			//small text
			this.text=new game.PIXI.Text("click to play music", {font:"40px Arial", fill: "#ffffff"});
			this.text.position={x: 20, y:20};
			game.scene.stage.addChild(this.text);

			this.button1=new game.Button(100, 130, "channel1", 45, this.changeChannel1, this);
			this.button2=new game.Button(100, 230, "channel2", 45, this.changeChannel2, this);
		},
         
        changeChannel1: function(){
        	if(this.button1.text.text!="stop"){
	        	this.button1.setText("stop");
	        	this.button1.trackid=game.audio.playSound("song1", false);
        	}
        	else{
	        	this.button1.setText("channel1");
	        	game.audio.stopSound(this.button1.trackid, false);
        	}
        },

        changeChannel2: function(){
        	if(this.button2.text.text!="stop"){
	        	this.button2.setText("stop");
	        	this.button2.trackid=game.audio.playSound("song2", false);
        	}
        	else{
	        	this.button2.setText("channel2");
	        	game.audio.stopSound(this.button2.trackid, false);
        	}
        }

    });
});
