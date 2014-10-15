game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('logo1.png');

	//========== Panda class ==========
	game.createClass('Panda', 'Sprite', {
	    interactive: true,
	    anchor: { x: 0.5, y: 0.5 },
	    offset: { x: 0, y: 0 },
	    draggable: false,
	
	    init: function(x, y) {
			//call parent constructor function
	        this._super('logo1.png', x, y);
	        game.scene.stage.addChild(this);
	    },

	    mousedown: function(e) {
	        this.offset.x = this.position.x - e.global.x;
	        this.offset.y = this.position.y - e.global.y;
	        this.draggable = true;
	        this.scale.x = this.scale.y = 1.1;
	    },
	
	    mousemove: function(e) {
	        if (this.draggable) {
	            this.position.x = e.global.x + this.offset.x;
	            this.position.y = e.global.y + this.offset.y;
	        }
	    },

	    mouseup: function() {
	        this.scale.x = this.scale.y = 1.0;
	        this.draggable = false;
	    },
	
	    mouseupoutside: function() {
	        this.mouseup();
	    }
	    
	});
	

    game.createScene('Main', {
        init: function() {
        	
            //add instructions
            this.text = new game.Text("Drag panda around", { font: '30px wallfont', fill: "#ffffff" });
            this.text.position={x: 50,y: 50};
            this.stage.addChild(this.text);

        var panda = new game.Panda(game.system.width / 2, game.system.height / 2 - 100);
        this.stage.addChild(panda);
        	
        }
    });
});