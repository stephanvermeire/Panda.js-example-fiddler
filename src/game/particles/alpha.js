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
	        emitter.startAlpha = 0;
        	emitter.endAlpha = 1;
	        this.addEmitter(emitter);
        
        }
		
	});
});