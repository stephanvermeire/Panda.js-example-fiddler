game.module(
	'game.main'
).require(
	'plugins.box2d'
).body(function() {
	
	game.addAsset('bubble.png');
	game.addAsset('bubble30.png');
	game.addAsset('bubble20.png');
	game.addAsset('box.png');
 
	game.createClass('Wall', 'Graphics', {
		init: function(x, y, width, height) {
			
			this._super();
			
			//draw shapes
			this.position = {x: x, y: y};
            //set linestyle and draw rectangle
            this.lineStyle (2, 0x7c2f01);
            this.beginFill(0xda633e, 1);
            this.drawRect(0, 0, width, height);
            this.endFill();
            this.drawRect(0, 0, width, height);   //x, y, width, height
			this.addTo(game.scene.stage);

			//create body
		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(x + width / 2) * game.Box2D.SCALE,
				(y + height / 2) * game.Box2D.SCALE
			); 
			bodyDef.type = game.Box2D.Body.b2_staticBody;
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
			var fixtureDef = new game.Box2D.FixtureDef;
			fixtureDef.shape = new game.Box2D.PolygonShape.AsBox(
				width / 2 * game.Box2D.SCALE,
				height / 2 * game.Box2D.SCALE
			);
			
			fixtureDef.density = 0;
			this.body.CreateFixture(fixtureDef);

			game.scene.addObject(this);
			
		}
		
	});
	

	
	game.createClass('Bubble', 'Sprite', {
		
		init: function(x, y, speedx, speedy) {

			this._super('bubble20.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
			game.scene.addObject(this);
			this.addTo(game.scene.stage);

			this.restitution = 1;   	//Box2D alternative of bounciness, 0 equals no bounciness at all, 1 is maximum bounciness
			this.density = 0.1;
			this.friction = 0.01;
			this.radius = 10;

			this.createBody();
			//game.scene.world.addBody(this.body);
		},
		
		createBody: function() {        
		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(this.position.x + this.width / 2) * game.Box2D.SCALE,
				(this.position.y + this.height / 2) * game.Box2D.SCALE
			); 
			bodyDef.type = game.Box2D.Body.b2_dynamicBody;
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
	
			var fixtureDef = new game.Box2D.FixtureDef;

			if(this.radius){
				//Cirkel
				fixtureDef.shape = new game.Box2D.CircleShape(this.radius * game.Box2D.SCALE);
			}
			else{
				//
				fixtureDef.shape = new game.Box2D.PolygonShape.AsBox(
					this.width / 2 * game.Box2D.SCALE,
					this.height / 2 * game.Box2D.SCALE
				);// */
			}
			//general stuff
			fixtureDef.density = this.density;
			fixtureDef.friction = this.friction;
			fixtureDef.restitution = this.restitution;
			this.body.CreateFixture(fixtureDef);
			this.body.SetAngularVelocity( Math.random()*2 );

		},

		update: function(){
			var p = this.body.GetPosition();
			this.position.x = p.x / game.Box2D.SCALE;
			this.position.y = p.y / game.Box2D.SCALE;
			this.rotation = this.body.GetAngle().round(2);
			//this.body.ApplyForce( new  game.Box2D.Vec2(0,-this.position.y+200), this.body.GetPosition());
		}
	});
	
	
	game.createScene('Main', {
		backgroundColor: 0xe1d4a7,
		
		init: function() {
			this.world = new game.World(0, 100);
			
			//create gravity vector
			var gravity = new game.Box2D.Vec2( 0, 100 * game.Box2D.SCALE );// gravity pull x, y
			//and now create world
			this.Box2Dworld = new game.Box2D.World(gravity, true);
			
			//add walls 
			var thickness = 30;
			//var wall_top    = new game.Wall( 100,  170, 200,50); 
			var wall_top    = new game.Wall( 0,  0, game.system.width,  thickness); 
			var wall_left   = new game.Wall( 0, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_right  = new game.Wall( game.system.width - thickness, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_bottom = new game.Wall( 0,  game.system.height - thickness, game.system.width,  thickness); 

			for(var i=0; i<300; i++){
				var bubble1 = new game.Bubble( Math.random()*(game.system.width-200) + 100, Math.random()*250 + 100, Math.random()*100 - 50, Math.random()*100 - 50);
			}
			
		},
		
		update: function(){
			this._super();
			this.Box2Dworld.Step(
				game.system.delta,
				6,
				6
			);
			this.Box2Dworld.ClearForces();

		}
 
	});
 
});