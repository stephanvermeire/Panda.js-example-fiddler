game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
    
    for(var i=1; i<=10; i++){
	    game.addAudio('sound/numbers/'+i.toString()+'a.*', i.toString()+'a');
	    game.addAudio('sound/numbers/'+i.toString()+'b.*', i.toString()+'b');
    }
    game.addAudio('sound/numbers/times.*', 'times');
    
    
	//========== simple soundplayer ==========
	//This is a very simple soundplayer implementation that is capable of playing 
	//a list of soundfragments one after the other in a playlist 

	game.createClass('Soundplayer', 'Class', {
	    playlist:[],
	    currentTrackId: null,
	
	    init: function(list) {
			this.play(list);
		},
	    
	    play: function(list){
			//stop and delete existing playlist
			this.stop();
			if(Object.prototype.toString.call( list ) === '[object Array]'){
				this.playlist = list;
			}
			else{
				this.playlist=[];
			}
			this.playNext();
			
	    },
	    
	    playNext: function(){
			if(this.playlist.length>0){
				var currentTrack = this.playlist.shift();
				this.currentTrackId = game.audio.playSound(currentTrack, false, this.playNext.bind(this));
			}
			else{
				//last soundtrack.
				this.currentTrackId = null;
			}
	    },
	    
	    stop: function(){
			//stop current sound if anything is playing
			if(this.currentTrackId!==null){
				game.audio.stopSound(this.currentTrackId, true);
			}
			this.playlist = [];
	    }
	    
	});
	
    
    
    game.createScene('Main', {
        backgroundColor: "#ffffff",
        init: function() {

            var text = new game.Text("Play 3 soundfiles one after the other\n(Click the canvas to read another sum)", { font: '30px Arial', align: "center" });
            this.stage.addChild(text);

			//create soundplayer and read out loud "3 times 7"
			//(Note that there are 3 separate soundfiles involved)
			//You could change the excersise by adjusting the numbers (up to 10 are loaded).
			this.soundplayer = new game.Soundplayer(["3a", "times", "7b"]);

			//another example:
			//var soundplayer = new game.Soundplayer(["8a", "times", "6b"]);
			            

         },
         
         
         click: function(e) {
         	var a=Math.round(Math.random(1,10)).toString()+"a";
         	var b=Math.round(Math.random(1,10)).toString()+"b";
			this.soundplayer = new game.Soundplayer([a, "times", b]);
         }

    });
});