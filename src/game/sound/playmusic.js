game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
    
    game.addAudio('sound/clear.*', 'clear');
    game.addAudio('sound/song1.*', 'song1');
    
    game.createScene('Main', {
        backgroundColor: "#ffffff",
        init: function() {
            //add text
            var text = new game.Text("Backgroundmusic is running\nClick canvas to play an additional sound", { font: '30px Arial', align: "center" });
            this.stage.addChild(text);
            game.audio.playMusic("song1", true);
            
            //For testing purposes:
			//game.audio.stopMusic();
			//console.log(game.audio.isMusicPlaying());
			//game.audio.muteMusic();
			//game.audio.pauseMusic();
			//game.audio.resumeMusic();
			//game.audio.setMusicVolume(10);

         },
        
         
         click: function(e) {
             game.audio.playSound("clear", false);
         }

    });
});


