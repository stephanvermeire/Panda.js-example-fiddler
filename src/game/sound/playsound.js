game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
    
    game.addAudio('sound/clear.*', 'clear');
    //In the media folder there are two versions of the sound file:
    //clear.m4a (web/iOS)
    //clear.ogg (android devices)
    //Panda chooses the right soundfile automatically as a result of the asterix
    
    game.createScene('Main', {
        backgroundColor: "#ffffff",
        init: function() {
            //add text
            var text = new game.Text("Click canvas to play a sound", { font: '30px wallfont' });
            this.stage.addChild(text);

            //For testing purposes
			//console.log(game.audio.isSoundPlaying());
        	//game.audio.stopSound();
			//game.audio.muteSound();
			//game.audio.pauseSound();
			//game.audio.resumeSound();
			//game.audio.setSoundVolume(10);
            
         },
         
         click: function(e) {
             game.audio.playSound("clear", false);
         }

    });
});


