game.module(
	'game.main'
).require(
	'plugins.p2',
	'plugins.pe_loader'
).body(function() {
	
	game.addAsset('banana.png');
	game.addAsset('pineapple.png');
 
	game.addAsset('physics.json');
 	/* this file is a JSON that looks like this:
 	{ 
		"banana": {
			"mass": 2, 
			"gravityScale": 1, 
			"damping": 0, 
			"angularDamping": 0, 
	    	"shapes": [
				{
					"type": "POLYGON", 
					"collisionGroup": 1, 
					"collisionMask": 65535,
					"polygon": [   [98, -0.5]  ,  [106, 0.5]  ,  [104.5, 21]  ,  [119.5, 36]  ,  [125.5, 52]  ,  [121.5, 80]  ,  [108.5, 103]  ,  [80, 122.5]  ,  [56, 127.5]  ,  [28, 122.5]  ,  [2, 106.5]  ,  [6, 92.5]  ,  [42, 90.5]  ,  [75, 70.5]  ,  [89.5, 44]  ,  [93.5, 24]  ,  [88.5, 8]  ,  [97, -0.5]  ]
				}
			]
		}
		,
		... 
	}
	*/

 
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
	
	
	game.createScene('Main', {
		backgroundColor: 0xe1d4a7,
		
		init: function() {
			var fruitName, 
				physics = game.getJSON('physics.json');
			
	        //Create world
	        this.world = new game.World(
	        	{
	        		gravity: [0, 5],
	        	}
	        );
	        this.world.ratio = 100;
	        
	        //create surrounding walls
			var wallLeft 	= new game.P2RectWall(0, 0, 20, 460).addTo(this.stage);
			var wallRight 	= new game.P2RectWall(580, 0, 20, 460).addTo(this.stage);
			var wallTop 	= new game.P2RectWall(20, 0, 560, 20).addTo(this.stage);
			var wallBottom 	= new game.P2RectWall(20, 440, 560, 20).addTo(this.stage);
			
			//now add some fruit
			for(var i=0; i<5; i++){
				
				//choose type randomly
				switch(Math.floor(Math.random()* 2)){
					case 0: 	fruitName = 'banana'; break;
					default: 	fruitName = 'pineapple'; break;
				}
				//and add it
				var fruit = new game.P2Sprite(
					fruitName + '.png', 
					physics[fruitName],
					Math.random()*400 + 100,
					Math.random()*250 + 100)
				.addTo(this.stage);
				
				//set start speed x and y
				fruit.body.velocity[0] = (Math.random()*100 - 50) / game.scene.world.ratio;
				fruit.body.velocity[1] = (Math.random()*100 - 50) / game.scene.world.ratio;
			}
		}
		
 
	});
 
});