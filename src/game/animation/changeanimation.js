//===================================
game.module(
    'game.main'
)
.body(function() {

//(Note that you could also use a spritesheet to load all images at once).
//propeller
game.addAsset('anim1/skeleton-animation0.jpg', 'prop0');
game.addAsset('anim1/skeleton-animation1.jpg', 'prop1');
game.addAsset('anim1/skeleton-animation2.jpg', 'prop2');
game.addAsset('anim1/skeleton-animation3.jpg', 'prop3');
game.addAsset('anim1/skeleton-animation4.jpg', 'prop4');
game.addAsset('anim1/skeleton-animation5.jpg', 'prop5');
//poof
game.addAsset('anim2/1.png');
game.addAsset('anim2/2.png');
game.addAsset('anim2/3.png');
game.addAsset('anim2/4.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		
		var text = new game.PIXI.Text("Click the canvas to change animation", {font:"20px Arial"});
		this.stage.addChild(text);
		
		//first animation
		this.propeller = new game.Animation(
            'prop0',
            'prop1',
            'prop2',
            'prop3',
            'prop4',
            'prop5'
        );
        
        //second animation   
		this.poof = new game.Animation(
            'anim2/1.png',
            'anim2/2.png',
            'anim2/3.png',
            'anim2/4.png'
        );
          
        this.propeller.animationSpeed = 0.1;
        this.propeller.position.set(230, 350);
        this.propeller.anchor.set(0,1);
        this.propeller.play();
        
        game.scene.stage.addChild(this.propeller);   
        
    },
    
    click: function(e){
    	//set new animation and make it start from the beginning
		this.propeller.textures=this.poof.textures;
		this.propeller.currentFrame=0;
		//In this case just run it once
		this.propeller.loop=false;
    }
});

});

