//Download the physics extention plugin for panda.js at: https://github.com/stephan0v/Panda.js-physics-extention-plugin

game.module(
	'game.main'
).require(
	'plugins.physicsextend'
).body(function() {
	
	game.addAsset('box_small.png');
 
	game.createClass('Box', 'Sprite', {
		init: function(x, y, speedx, speedy, mass) {

			this._super('box_small.png', x, y, {anchor: { x: 0.5, y: 0.5 }});

			this.body = new game.Body({
				position: { x: x, y: y },
				collisionGroup: 0,
				collideAgainst: 0,
				velocity: {x:speedx,y:speedy},
				mass: mass
			});
			
			game.scene.addObject(this);
			this.addTo(game.scene.stage);
			this.body.addShape(new game.Rectangle(60, 78));
			game.scene.world.addBody(this.body);
		},
		
		update: function(){
			this.position.x = this.body.position.x;
			this.position.y = this.body.position.y;
		}
	});
	
	
	game.createScene('Main', {
		backgroundColor: 0x44cce2,
		
		init: function() {
			this.world = new game.World(0, 0);
			var boxa=new game.Box(150,275,20,-10, 25);
			var boxb=new game.Box(175,0,35,95, 5);
			var boxc=new game.Box(250,500,35,-125, 10);
			var boxd=new game.Box(450,275,-50,0, 50);

		}
 
	});
 
});