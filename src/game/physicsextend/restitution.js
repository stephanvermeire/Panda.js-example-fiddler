game.module(
	'game.main'
).require(
	'plugins.physicsextend'
).body(function() {
	
	game.addAsset('bubble.png');
 
	game.createClass('Wall', 'Graphics', {
		init: function(x, y, width, height) {
			
			this._super();
			
            //set linestyle and draw rectangle
            this.lineStyle (2, 0x7c2f01);
            this.beginFill(0xda633e, 1);
            this.drawRect(x, y, width, height);
            this.endFill();
            this.drawRect(x, y, width, height);   //x, y, width, height

			//body
			this.body = new game.Body({
				position: { x: x+width/2, y: y+height/2 },
				fixed: true,
				collisionGroup: 0,
				collideAgainst: 0
			});
			
			game.scene.addObject(this);
			this.addTo(game.scene.stage);
			this.body.addShape(new game.Rectangle(width, height));
			game.scene.world.addBody(this.body);
		}
	});
	
	
	game.createClass('Bubble', 'Sprite', {
		init: function(x, y, speedx, speedy) {

			this._super('bubble.png', x, y, {anchor: { x: 0.5, y: 0.5 }});

			this.body = new game.Body({
				position: { x: x, y: y },
				collisionGroup: 0,
				collideAgainst: 0,
				velocity: {x:speedx,y:speedy},
				mass: 1
			});
			
			game.scene.addObject(this);
			this.addTo(game.scene.stage);
			this.body.addShape(new game.Circle(30));
			game.scene.world.addBody(this.body);
		},
		
		update: function(){
			this.position.x = this.body.position.x;
			this.position.y = this.body.position.y;
		}
	});
	
	
	game.createScene('Main', {
		backgroundColor: 0xe1d4a7,
		
		init: function() {
			this.world = new game.World(0, 100);
			
			//add wall on top
			var wall_top = new game.Wall(10, 400, 580, 50);
 
			//add bubbles
			var bubble1 = new game.Bubble( 150, 100, 0, 0);
			var bubble2 = new game.Bubble( 300, 100, 0, 0);
			bubble2.body.restitution = 0.2;
		}
 
	});
 
});