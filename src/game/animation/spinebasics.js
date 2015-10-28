game.module(
    'game.main'
)
.body(function() {

//Load the images. (There are only 2 images involved  in this animation).
//In order to avoid conflicts in the texture cache, all image files are put into a separate folder

game.addAsset('spine_spritesheet1.json');

//Load the specific spine animation
game.addAsset('spine_animation1.json');


game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		
        this.spineAnimation = new game.Spine('spine_animation1.json');
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

