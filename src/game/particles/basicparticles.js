game.module(
	'game.main'
)
.body(function(){

	game.addAsset('panda.png');

	game.createScene('Main', {	
		backgroundColor: 0xeeeeee,
		init: function(message) {
			
			//======== WARNING, particle emitters are cool! =========
			//If you intent to build anything descent in panda.js then you should definitively spend some time exploring the possibililties of emitters.
			
			//create emitter
            var emitter = new game.Emitter();
            //set visualDisplayContainer were the images will be emitted.
            //(Usually this is game.scene.stage but remember that you could also emit particles from within the container of an existing sprite.)
	        emitter.container = this.stage;
	        //Set texture to emit
	        emitter.textures.push('panda.png');
	        //set position
	        emitter.position.set(game.system.width / 2, game.system.height / 2);
	        //add emitter to the scene so it will start working.
	        this.addEmitter(emitter); // */
	        
	        /*/alternatively one could use the constructor and pass the options array as an argument
	        var emitter = new game.Emitter({
	        	container: this.stage,
	        	textures: ['panda.png'],
	        	position: {x: game.system.width / 2, y: game.system.height / 2}
	        });
	        this.addEmitter(emitter); // */
       }
		
	});
});