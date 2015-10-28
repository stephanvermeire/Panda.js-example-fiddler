game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
			
	        var emitter = new game.Emitter();
	        emitter.container = this.stage;
	        emitter.textures.push('panda.png');
	        emitter.position.set(game.system.width / 2, game.system.height / 2);
	        emitter.speed = 200;
        	emitter.speedVar = 190;
	        this.addEmitter(emitter);
        
        }
		
	});
});