game.module(
	'game.main'
).require(
	'plugins.p2'
).body(function() {
	
	game.addAsset('bubble.png');
 
	game.createClass('P2RectWall', 'Graphics', {

		init: function(x, y, width, height) {
			this._super();
			//draw graphics to show where the wall is situated
			this.lineStyle (2, 0x7c2f01);
			this.beginFill(0xda633e, 0.5);
			this.drawRect(0, 0, width, height);
			this.endFill();
			this.position.set(x, y);
	
			//create body
			this.body = new game.Body({
			    position: [
			    	(x + width/2)/ game.scene.world.ratio, 
			    	(y + height/2)/ game.scene.world.ratio
			    ],
			    mass: 0	//This will make it a static body!
			});
			//and add shape
			var shape = new game.Rectangle(
				width / game.scene.world.ratio, 
				height / game.scene.world.ratio
			);
		
			this.body.addShape(shape);
			game.scene.world.addBody(this.body);
		},
      
		remove: function(){
			game.scene.world.removeBody(this.body);
		  	this._super();
		}
		
	});
	
	game.createClass('Bubble', 'Sprite', {
		init: function(x, y) {

			this._super('bubble.png', x, y, {anchor: { x: 0.5, y: 0.5 }});

			//create body
			this.body = new game.Body({
			    position: [
			    	x / game.scene.world.ratio, 
			    	y / game.scene.world.ratio
			    ],
			    mass: 1,
			    damping: 0,
			    angularDamping: 0
			});
			//and add shape
			var shape = new game.Circle(30 / game.scene.world.ratio);	//radius=30
		
			this.body.addShape(shape);
			game.scene.world.addBody(this.body);
			game.scene.addObject(this);
			
		},
		
		update: function(){
			this.position.x = this.body.position[0] * game.scene.world.ratio;
			this.position.y = this.body.position[1] * game.scene.world.ratio;
		}
	});
	
	
	
	game.createScene('Main', {
		backgroundColor: 0xe1d4a7,
		
		init: function() {
			
	        //Create world
	        this.world = new game.World(
	        	{
	        		gravity: [0, 2],
	        	}
	        );
	        this.world.ratio = 100;
	        
	        //create surrounding walls
			var wallLeft 	= new game.P2RectWall(0, 0, 20, 460).addTo(this.stage);
			var wallRight 	= new game.P2RectWall(580, 0, 20, 460).addTo(this.stage);
			var wallTop 	= new game.P2RectWall(20, 0, 560, 20).addTo(this.stage);
			var wallBottom 	= new game.P2RectWall(20, 440, 560, 20).addTo(this.stage);
			
			for(var i=0; i<25; i++){
				var bubble1 = new game.Bubble( Math.random()*400 + 100, Math.random()*250 + 100).addTo(this.stage);
				//now set start speed x and y
				bubble1.body.velocity[0] = (Math.random()*100 - 50) / game.scene.world.ratio;
				bubble1.body.velocity[1] = (Math.random()*100 - 50) / game.scene.world.ratio;
			}
		}
		
 
	});
 
});