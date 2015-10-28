game.module(
	'game.main'
).require(
	'plugins.box2d'
).body(function() {
	
	game.addAsset('box.png');
 
	game.createClass('Wall', 'Graphics', {
		init: function(x, y, width, height) {
			
			this._super();
			
			//draw shapes. This is done for demonstration purposes only so you know where the walls are.
			this.position = {x: x, y: y};
            //set linestyle and draw rectangle
            this.lineStyle (2, 0x7c2f01);
            this.beginFill(0xda633e, 1);
            this.drawRect(0, 0, width, height);
            this.endFill();
            this.drawRect(0, 0, width, height);   //x, y, width, height
			this.addTo(game.scene.stage);

			//create body definition (the 'blueprint'for the actual body).
		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(x + width / 2) * game.Box2D.SCALE,
				(y + height / 2) * game.Box2D.SCALE
			); 
			//We make the wall a StaticBody (which is actually the default type).
			//Mobile bodies are defined as b2_dynamicBody as we will see later on
			bodyDef.type = game.Box2D.Body.b2_staticBody;	
			//Now create the actual body from the definition.
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
			
			//In order to handle collision, we have to add a fixture (= the shape) of the body.
			//First we set up a fixture definition which will be used to create the actual fixture later on.
			//(Starting to see the pattern already?)
			var fixtureDef = new game.Box2D.FixtureDef;
			fixtureDef.shape = new game.Box2D.PolygonShape.AsBox(
				width / 2 * game.Box2D.SCALE,
				height / 2 * game.Box2D.SCALE
			);
			fixtureDef.density = 0;
			this.body.CreateFixture(fixtureDef);
			//That's it! We don't have to add it to the world anymore because that is dealt with during the construction proces already.

			game.scene.addObject(this);
			
		}
		
	});
	

	game.createClass('Box', 'Sprite', {
		
		init: function(x, y) {

			this._super('box.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
			game.scene.addObject(this);
			this.addTo(game.scene.stage);

			this.restitution = 0.8; 
			this.density = 0.1;
			this.friction = 0.1;

		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(this.position.x + this.width / 2) * game.Box2D.SCALE,
				(this.position.y + this.height / 2) * game.Box2D.SCALE
			); 
			bodyDef.type = game.Box2D.Body.b2_dynamicBody;
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
	
			var fixtureDef = new game.Box2D.FixtureDef;
			//This is how to set a rectangular shape
			fixtureDef.shape = new game.Box2D.PolygonShape.AsBox(
				this.width / 2 * game.Box2D.SCALE,
				this.height / 2 * game.Box2D.SCALE
			);
			fixtureDef.density = this.density;
			fixtureDef.friction = this.friction;
			fixtureDef.restitution = this.restitution;
			this.body.CreateFixture(fixtureDef);
			//Now some extra features. We can set the initial angle like so:
			this.body.SetAngle( 0.5 );
			//It is even possible to set the starting speed of rotation:
			this.body.SetAngularVelocity( -0.5 );
		},

		update: function(){
			var p = this.body.GetPosition();
			this.position.x = p.x / game.Box2D.SCALE;
			this.position.y = p.y / game.Box2D.SCALE;
			this.rotation = this.body.GetAngle().round(2);
		}
	});

	
	game.createScene('Main', {
		backgroundColor: 0xe1d4a7,
		
		init: function() {

			//create gravity vector
			var gravity = new game.Box2D.Vec2( 0, 100 * game.Box2D.SCALE );// gravity pull x, y
			//and now create world
			this.Box2Dworld = new game.Box2D.World(gravity, true);
			
			//add walls 
			var thickness = 10;
			//var wall_top    = new game.Wall( 100,  170, 200,50); 
			var wall_top    = new game.Wall( 0,  0, game.system.width,  thickness); 
			var wall_left   = new game.Wall( 0, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_right  = new game.Wall( game.system.width - thickness, thickness, thickness,  game.system.height - 2 * thickness);
			var wall_bottom = new game.Wall( 0,  game.system.height - thickness, game.system.width,  thickness); 

			//add a couple of boxes
			for(var i=0; i<3; i++){
				var box = new game.Box( Math.random()*(game.system.width-200) + 100, Math.random()*250 + 100);
			}
			
            var text = new game.PIXI.Text("Use arrows to change gravity", { font: '20px Arial' });
            text.position.x=15;
            text.position.y=15;
            this.stage.addChild(text);
		},
		
		update: function(){
			this._super();
			//The following code is needed to update the time in the box2d world.
			//The values below are fine as default values, feel free to look up more info in the reference.
			this.Box2Dworld.Step(
				game.system.delta, //time elapsed
				6,	//world Velocity Iterations
				6	//world Position Iterations				
			);
			this.Box2Dworld.ClearForces();	//The world has been updated. Now get rid of forces that had been set during the previous cicle.

		},
		
		keydown: function(e){
			switch (e.toString()){
				case "UP":
					var gravity = new game.Box2D.Vec2( 0, -100 * game.Box2D.SCALE );// gravity pull x, y
					game.scene.Box2Dworld.SetGravity(gravity);
					break;
				case "DOWN":
					var gravity = new game.Box2D.Vec2( 0, 100 * game.Box2D.SCALE );// gravity pull x, y
					game.scene.Box2Dworld.SetGravity(gravity);
					break;
				case "LEFT":
					var gravity = new game.Box2D.Vec2(-100 * game.Box2D.SCALE ,0 );// gravity pull x, y
					game.scene.Box2Dworld.SetGravity(gravity);
					break;
				case "RIGHT":
					var gravity = new game.Box2D.Vec2(100 * game.Box2D.SCALE ,0 );// gravity pull x, y
					game.scene.Box2Dworld.SetGravity(gravity);
					break;
			};
		}

	});
 
});