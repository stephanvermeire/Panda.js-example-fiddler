game.module(
    'game.main'
)
.body(function() {

game.addAsset('anim1/skeleton-animation0.jpg', 'prop0');
game.addAsset('anim1/skeleton-animation1.jpg', 'prop1');
game.addAsset('anim1/skeleton-animation2.jpg', 'prop2');
game.addAsset('anim1/skeleton-animation3.jpg', 'prop3');
game.addAsset('anim1/skeleton-animation4.jpg', 'prop4');
game.addAsset('anim1/skeleton-animation5.jpg', 'prop5');

game.createScene('Main', {
    backgroundColor: 0xeeeeee,

    init: function() {
		
		this.propeller = new game.Animation(
            'prop0',
            'prop1',
            'prop2',
            'prop3',
            'prop4',
            'prop5'
        );
          
          
        this.propeller.animationSpeed = 0.1;
        this.propeller.position.set(230, 350);
        this.propeller.anchor.set(0,1);
        this.propeller.loop=false;
        this.propeller.play();
        this.propeller.onComplete = function(){
			//removepropeller from stage. 
			//(This is in fact the only reference to the animation so it will be deleted compelely);
			game.scene.stage.removeChild(this);
        };
        
        
        game.scene.stage.addChild(this.propeller);   
        
    }
});

});