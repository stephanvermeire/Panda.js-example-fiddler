game.module(
	'game.main'
).require(
	'plugins.physicsextend'
).body(function() {
	
	game.addAsset('bubble.png');
	game.addAsset('bubble30.png');
	game.addAsset('bubble20.png');
 
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

			this._super('bubble30.png', x, y, {anchor: { x: 0.5, y: 0.5 }});

			this.body = new game.Body({
				position: { x: x, y: y },
				collisionGroup: 0,
				collideAgainst: 0,
				velocity: {x:speedx,y:speedy},
				mass: 1
			});
			
			game.scene.addObject(this);
			this.addTo(game.scene.stage);
			this.body.addShape(new game.Circle(15));
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
			
			//add walls 
			var thickness = 30;
			var wall_top    = new game.Wall( 0,  0, game.system.width,  thickness); 
			var wall_left   = new game.Wall( 0, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_right  = new game.Wall( game.system.width - thickness, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_bottom = new game.Wall( 0,  game.system.height - thickness, game.system.width,  thickness); 

			for(var i=0; i<100; i++){
				var bubble1 = new game.Bubble( Math.random()*(game.system.width-200) + 100, Math.random()*250 + 100, Math.random()*100 - 50, Math.random()*100 - 50);
				bubble1.body.restitution = 0.9;
			}

		}
 
	});
 
});