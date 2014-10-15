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
            //create graphics object
            var graphics = new game.Graphics();

            //set linestyle
            graphics.lineStyle (2, 0xFF0000);
            graphics.drawRect(50, 10, 400, 100);   //x, y, width, height
            
            //set fill and draw another rectagle that is filled in addition to the line
            graphics.beginFill(0x00cc00, 1);
            graphics.drawRect(50, 150, 400, 100);
            graphics.endFill();
            
            //change linestyle and draw circle
            graphics.lineStyle (5, 0x990000);
            graphics.drawCircle(100, 350, 30);   //x, y, radius
            
            //draw ellipse
            graphics.drawEllipse (200, 350, 30,50);   //x, y, radius
            
            //and finally a filled ellipse
            graphics.beginFill(0x00cc00, 1);
            graphics.drawEllipse (300, 350, 30,50);   //x, y, radius
            graphics.endFill();
            
            //add to stage
            this.stage.addChild(graphics);

            //=== Here are some additional options to try ===
            //graphics.alpha=0.5;            //set alpha
            //graphics.rotation=Math.PI/8;   //rotation
            //graphics.position.set(200, 0); //change position of the shape
            //graphics.clear();              // remove drawings
            
            
         }
         
 
    });
});


