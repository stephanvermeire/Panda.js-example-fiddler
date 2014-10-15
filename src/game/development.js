game.module(
	'game.main'
)
.require(
	'engine.core'
)
.body(function(){

	game.addAsset('logo1.png');

	game.createScene('Main', {	
		story:"Keys types: ",
		init: function() {
			//Q key
			this.text = new game.Text("", { font: '30px wallfont', fill: "#ffffff" });
			this.text.position={x: 50,y: 50};
			this.stage.addChild(this.text);

			//All types keys so far
			this.text2 = new game.Text("Keys types: ", { font: '30px wallfont', fill: "#ffffff", wordWrap : true, wordWrapWidth: 400  });
			this.text2.position={x: 50,y: 200};
			this.stage.addChild(this.text2);
		},
		
		update: function(){
			//text1: Q-key
			if(game.keyboard.down("Q")){
				this.text.setText("Q-key is PRESSED now!!!");
			}
			else{
				this.text.setText("Q-key not pressed");
			}

		},
		
		keydown: function(e){
			this.story = this.story + e.toString();
			console.log(this.story);
			this.text2.setText(this.story);
		}
	});
});