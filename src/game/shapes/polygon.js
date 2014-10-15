game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){
    
    
    game.createScene('Main', {
        backgroundColor: 0xeeeeee,
        init: function() {
            
            var graphics = new game.Graphics();
            
            // set a fill and line style
            graphics.beginFill(0xFF3300);
            graphics.lineStyle(10, 0xffd900, 1);
            
            // draw a shape
            graphics.moveTo(0,50);
            graphics.lineTo(250, 50);
            graphics.lineTo(100, 100);
            graphics.lineTo(250, 220);
            graphics.lineTo(50, 220);
            graphics.lineTo(0, 50);
            graphics.endFill();
            
            // set a fill and line style again
            graphics.lineStyle(10, 0xFF0000, 0.8);
            graphics.beginFill(0xFF700B, 1);
            
            // draw a second shape
            graphics.moveTo(210,300);
            graphics.lineTo(450,320);
            graphics.lineTo(570,350);
            graphics.lineTo(580,20);
            graphics.lineTo(330,120);
            graphics.lineTo(410,200);
            graphics.lineTo(210,300);
            graphics.endFill();
            
            this.stage.addChild(graphics);
            
         }
         
 
    });
});


