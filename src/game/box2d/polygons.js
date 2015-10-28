game.module(
	'game.main'
).require(
	'plugins.box2d'
).body(function() {
	
	game.addAsset('bubble.png');
	game.addAsset('rock.png');
 
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
	

	game.createClass('Bubble', 'Sprite', {
		
		init: function(x, y) {

			this._super('bubble.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
			game.scene.addObject(this);
			this.addTo(game.scene.stage);

			//create a body using a body definition
		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(this.position.x + this.width / 2) * game.Box2D.SCALE,
				(this.position.y + this.height / 2) * game.Box2D.SCALE
			); 
			bodyDef.type = game.Box2D.Body.b2_dynamicBody;	//type is dynamicBody now!
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
			//and the fixture
			var fixtureDef = new game.Box2D.FixtureDef;
			fixtureDef.shape = new game.Box2D.CircleShape(30 * game.Box2D.SCALE); //15 is the radius of the bubble
			//The following features add some extra juice to our bubble so it will respond in a more realistic way
			fixtureDef.density = 0.1;		//density has influence on collisions
			fixtureDef.friction = 0.5;		//A higher friction makes the body slow down on contact and during movement. (normal range: 0-1). 
			fixtureDef.restitution = 0.9;	//=Bounciness (range: 0-1).
			this.body.CreateFixture(fixtureDef);
		},
		
		update: function(){
			//The box2D world keeps track of the movement and position of the body.
			//use the update function to get the sprite in the right spot
			var p = this.body.GetPosition();
			this.position.x = p.x / game.Box2D.SCALE;
			this.position.y = p.y / game.Box2D.SCALE;
			this.rotation = this.body.GetAngle().round(2);
		}
	});
	
	
	game.createClass('Polygon', 'Sprite', {
		
		init: function(x, y) {

			this._super('rock.png', x, y, {anchor: { x: 0.5, y: 0.5 }});
			game.scene.addObject(this);
			this.addTo(game.scene.stage);

			//create a body using a body definition
		    var bodyDef = new game.Box2D.BodyDef();
			bodyDef.position = new game.Box2D.Vec2(
				(this.position.x + this.width / 2) * game.Box2D.SCALE,
				(this.position.y + this.height / 2) * game.Box2D.SCALE
			); 
			bodyDef.type = game.Box2D.Body.b2_dynamicBody;	//type is dynamicBody now!
			this.body = game.scene.Box2Dworld.CreateBody(bodyDef);
			//and the fixture
			var fixtureDef = new game.Box2D.FixtureDef;
			var box2DPoints = [
				this.coordinate(0,43),
				this.coordinate(77,0),
				this.coordinate(120,66)
			];
			fixtureDef.shape = new game.Box2D.PolygonShape.AsVector(box2DPoints, box2DPoints.length);
			fixtureDef.density = 0.1;		//density has influence on collisions
			fixtureDef.friction = 0.5;		//A higher friction makes the body slow down on contact and during movement. (normal range: 0-1). 
			fixtureDef.restitution = 0.9;	//=Bounciness (range: 0-1).
			this.body.CreateFixture(fixtureDef);
			this.body.SetAngularVelocity( -0.5 );
		},
		
		update: function(){
			//The box2D world keeps track of the movement and position of the body.
			//use the update function to get the sprite in the right spot
			var p = this.body.GetPosition();
			this.position.x = p.x / game.Box2D.SCALE;
			this.position.y = p.y / game.Box2D.SCALE;
			this.rotation = this.body.GetAngle().round(2);
		},
		
		coordinate: function(x,y){
			return new game.Box2D.Vec2(Math.round((x-this.width/2) * game.Box2D.SCALE), Math.round((y-this.height/2) * game.Box2D.SCALE));
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

			//add a couple of bubbles
			for(var i=0; i<10; i++){
				var polygon = new game.Polygon( Math.random()*(game.system.width-300) + 100, Math.random()*250 + 100);
			}
			

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

		}
 
	});
 
});