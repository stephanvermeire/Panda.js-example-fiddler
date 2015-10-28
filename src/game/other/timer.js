game.module(
    'game.main'
)
.body(function() {

game.addAsset('chest_closed1.png');
game.addAsset('chest_closed2.png');
game.addAsset('chest_opened.png');
game.addAsset('coin.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		
		this.chest = new game.Animation(
            'chest_closed1.png',
            'chest_closed2.png'
        );
          
		this.chest_opened = new game.Animation(
            'chest_opened.png'
        );
          
        this.chest.animationSpeed = 0.2;
        this.chest.play();
        this.chest.position.set(230, 350);
        this.chest.anchor.set(0,1);
        
        
        this.timer = this.addTimer(3000, function(){
        	this.chest.textures=this.chest_opened.textures;
        	
	    	var emitter = new game.Emitter();
	        emitter.container = this.stage;
	        emitter.textures.push('coin.png');
	        emitter.position.set(this.chest.position.x+50, this.chest.position.y-50);
	        emitter.target.set(this.chest.position.x+50, 2000);
	        emitter.targetForce = 200;
	        emitter.angle = -Math.PI/2;
        	emitter.angleVar = 0.5;
	        emitter.speed = 240;
        	emitter.speedVar = 100;
	        emitter.positionVar.set(20, 0);
	        emitter.rotate = 5;
	        emitter.startAlpha = 1;
        	emitter.endAlpha = 1;
	        emitter.life = 5;
	        //emitter.rate = 0.01;
	        emitter.count = 80; // Emit 2 particles
	        emitter.duration = 0.2;
	        this.addEmitter(emitter);
        }.bind(this));


        game.scene.stage.addChild(this.chest);   
        
        this.text = new game.PIXI.Text("Time to explode: ", {font: "25px Arial"});
        this.text.position = {x: 10, y: 10};
        this.stage.addChild(this.text);
    },
    
    update: function(){
    	this._super();
    	var time = - Math.floor(this.timer.time()/1000);
    	if(time<0){time = 0;}
    	this.text.setText("Time to explode: " + time);
    }
});

});

