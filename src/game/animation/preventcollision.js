game.module(
    'game.main'
)
.body(function() {

//Load the images. (There are only 2 images involved  in this animation).
//In order to avoid conflicts in the texture cache, all image files are put into a separate folder

game.addAsset('anim4/media.json');
//In this file you will find the following references:
/* {"frames": {

	"anim4/basis.png":{			//Reference for the texture cache (to a subfolder!) 
		"frame": ....
	},
	
	"meta": {
		...
		"image": "media.png",	//Relative reference from media.json to media.png spritesheet file
		...
	}
}
 */

//Load the specific spine animation
game.addAsset('anim4/skeleton.json');
//In this file you will find the following references:
/*
 {
"skeleton": {...},
"bones": [...],
"slots": [
	{ "name": "project/g4680", "bone": "root", "attachment": "anim4/basis" }, ... 	//Reference for the texture cache (to a subfolder!) 
],
"skins": {
	"default": {
		"project/g4680": {
			"anim4/basis": { "x": -1.49, "y": -3.98, "width": 59, "height": 61 } 	//Reference for the texture cache (to a subfolder!) 
		}, ...
	}
},
"animations": {...}
}
*/


game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		
        this.spineAnimation = new game.Spine('anim4/skeleton.json');
        this.spineAnimation.mix('animation3a','animation3b', 0.3);
        this.spineAnimation.mix('animation3b','animation3a', 0.3);
        this.spineAnimation.position.x = 100;
        this.spineAnimation.position.y = 100;
        this.spineAnimation.play('animation3a', true);
        this.stage.addChild(this.spineAnimation);
       
		var text = new game.PIXI.Text('Click to change the animation', {font:"20px Arial"});
		this.stage.addChild(text);
    },

    mousedown: function() {
        if(this.spineAnimation.state.current.name === 'animation3a'){
			//change to animation3b
			this.spineAnimation.play('animation3b', true);
        }
        else{
			this.spineAnimation.play('animation3a', true);
        }
    }

});

});

