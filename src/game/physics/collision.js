game.module(
    'game.main'
)
.body(function() {

game.addAsset('panda.png');
game.addAsset('coin.png');

game.createClass('Panda', 'Sprite', {
	
	interactive: true,
	mouse: {x:100, y: 100},
	
	init: function(x, y){
		this._super('panda.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
		this.position = {x: x, y: y};

		//body
        this.body = new game.Body({
            position: { x: x, y: y },
            velocityLimit: { x: 150, y: 150 },
            velocity: {x:-100,y:-50},
            collisionGroup: 1,
            collideAgainst: 0,
            mass: 0
        });
        this.body.collide = this.collide.bind(this);
        this.body.addShape(new game.Rectangle(60, 60));
		//add sprite to scene
        game.scene.addObject(this);
        //add body of this sprite to the world object
        game.scene.world.addBody(this.body);
        //add sprite to display container
        game.scene.stage.addChild(this);
	},
	
    collide: function(opponent) {
		console.dir(arguments);
		console.log("Collision!");
		opponent.remove();
        return true;
    },

    update: function(){
		this.position.x = this.body.position.x;
		this.position.y = this.body.position.y;
        this.body.velocity.x = (this.mouse.x - this.body.position.x);
        this.body.velocity.y = (this.mouse.y - this.body.position.y);
    },

    remove: function() {
        game.scene.removeObject(this);
        game.scene.world.removeBody(this.body);
        game.scene.stage.removeChild(this);
    },
    
    mousemove: function(e) {
		this.mouse.x = e.global.x;
		this.mouse.y = e.global.y;
    }
    
});

game.createClass('Coin', 'Sprite', {
	init: function(x, y){
		this._super('coin.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
		this.position = {x: x, y: y};

		//body
        this.body = new game.Body({
            position: { x: x, y: y },
            velocityLimit: { x: 300, y: 1000 },
            velocity: {x:0,y:0},
            collisionGroup: 0,
            mass: 0
        });
        this.body.remove = this.remove.bind(this);
        this.body.addShape(new game.Circle(10));
		//add sprite to scene
        game.scene.addObject(this);
        //add body of this sprite to the world object
        game.scene.world.addBody(this.body);
        //add sprite to display container
        game.scene.stage.addChild(this);
	},

    update: function(){
		this.position.x = this.body.position.x;
		this.position.y = this.body.position.y;
    },

    remove: function() {
        game.scene.removeObject(this);
        game.scene.world.removeBody(this.body);
        game.scene.stage.removeChild(this);
    }
});

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		this.world = new game.World(0, 0);
		
		for(var i=0; i<10; i++){
			coin = new game.Coin(Math.random()*game.system.width, Math.random()*game.system.height);
		}
		var panda = new game.Panda(300,200);

    }
});

});

