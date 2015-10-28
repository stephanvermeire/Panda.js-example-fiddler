game.module(
    'game.main'
)
.body(function() {

game.addAsset('papapino_spine.json');
game.addAsset('papapino_spritesheet.json');

game.createClass("Panda", {
    init: function(x, y) {
        this.sprite = new game.Spine('papapino_spine.json');
        this.sprite.stateData.setMixByName('walk','stand', 0.1);
        this.sprite.stateData.setMixByName('stand','walk', 0.05);
        this.sprite.stateData.setMixByName('stand','jump', 0.1);
        this.sprite.stateData.setMixByName('walk','jump', 0.1);
        this.sprite.stateData.setMixByName('jump','fall', 0.4);
        this.sprite.stateData.setMixByName('walk','fall', 0.2);
        this.sprite.stateData.setMixByName('fall','walk', 0.1);
        this.sprite.stateData.setMixByName('jump','walk', 0.1);
        this.sprite.stateData.setMixByName('fall','stand', 0.1);
        this.sprite.stateData.setMixByName('stand','duck', 0.1);
        this.sprite.stateData.setMixByName('duck','stand', 0.1);
        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.changeAnim('walk', true);

        game.scene.stage.addChild(this.sprite);
    },

    changeAnim: function(anim, loop) {
        this.sprite.state.setAnimationByName(anim, !!loop);
    },

    jump: function() {
        if(this.sprite.state.current.name !== 'walk') return;
        
        this.changeAnim('jump');

        var speed = 500;
        var up = game.scene.addTween(this.sprite.position, {y: '-300'}, speed, {easing: game.Tween.Easing.Quadratic.Out, onComplete: this.changeAnim.bind(this,'fall')});
        var down = game.scene.addTween(this.sprite.position, {y: game.system.height - 10}, speed, {easing: game.Tween.Easing.Quadratic.In, onComplete: this.changeAnim.bind(this,'walk',true)});
        up.chain(down);
        up.start();
    }
});


game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		
        this.panda = new game.Panda(game.system.width / 2, game.system.height - 10);

        var word = game.device.mobile ? 'Touch' : 'Click';
		var text = new game.PIXI.Text(word + ' to jump', {font:"20px Arial"});
		this.stage.addChild(text);
    },

    mousedown: function() {
        this.panda.jump();
    }

});

});

