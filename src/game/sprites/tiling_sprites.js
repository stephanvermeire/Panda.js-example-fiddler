game.module(
    'game.main'
)
.body(function() {

game.addAsset('road.png');
game.addAsset('panda.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
        var tile = new game.TilingSprite('panda.png');
        tile.position = {x: 100, y: 100};
        tile.speed.x = 10;
        tile.addTo(this.stage);
        this.addObject(tile);
		
        var tile2 = new game.TilingSprite('road.png');
        tile2.position = {x: 0, y: 200};
        tile2.speed.x = -30;
        tile2.addTo(this.stage);
        this.addObject(tile2);
		
    }
});

});

