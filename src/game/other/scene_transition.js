game.module(
    'game.main'
)
.body(function() {


game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
		var text = new game.PIXI.Text('This is Scene 1. (click to change)', {font:"20px Arial"});
		text.position = {x: 50, y:50};
		this.stage.addChild(text);
    },

    click: function() {
        game.system.setScene('Scene2');
    }

});

game.createScene('Scene2', {
    backgroundColor: 0x33aa66,

    init: function() {
		var text = new game.PIXI.Text('This is Scene 2. (click to change)', {font:"20px Arial"});
		text.position = {x: 200, y:350};
		this.stage.addChild(text);
    },

    click: function() {
        game.system.setScene('Main');
    }

});

});

