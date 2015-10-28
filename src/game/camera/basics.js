game.module(
    'game.main'
)
.body(function() {

game.addAsset('panda.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		this.world = new game.World(0, this.gravity);
		
		var text = new game.PIXI.Text('Use arrows to move panda', {font:"20px Arial"});
		text.position = {x: 100, y: 100};
		this.stage.addChild(text);
		
		
		this.sprite = new game.Sprite('panda.png', 200, 200);
		this.sprite.body = new game.Body({
	            position: { x: 200, y: 200 },
	            velocityLimit: { x: 300, y: 1000 },
	            velocity: {x:0,y:0},
	            collisionGroup: 1,
	            collideAgainst: 0,
	            mass: 0
	    });
	    game.scene.world.addBody(this.sprite.body);
	    this.sprite.update = function(){
			this.position = this.body.position;
			this.text.setText('x:'+ Math.floor(this.position.x) + ' y:'+ Math.floor(this.position.y));
			//console.log(this.body.position.x);
		};
		this.sprite.text = new game.PIXI.Text('x:- y:-', {font:"15px Arial"});
		this.sprite.text.position = {x: 10, y:60};
		this.sprite.addChild(this.sprite.text);
	    this.addObject(this.sprite);

		this.stage.addChild(this.sprite);
		
		
		this.camera = new game.Camera();
		this.camera.target = this.sprite;
		this.camera.container = text;
		//this.stage.addChild(this.camera);
    },

	update: function(){
		this._super();
		if(game.keyboard.down("UP")){
			console.log("!");
			this.sprite.body.velocity.y= -150;
		}
		else if(game.keyboard.down("DOWN")){
			this.sprite.body.velocity.y= 150;
		}
		else{
			this.sprite.body.velocity.y= 0;
		}
		if(game.keyboard.down("LEFT")){
			console.log("!");
			this.sprite.body.velocity.x= -150;
		}
		else if(game.keyboard.down("RIGHT")){
			this.sprite.body.velocity.x= 150;
		}
		else{
			this.sprite.body.velocity.x= 0;
		}

	}
		

});

});

