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
				graphics.lineStyle (5, 0x000000);
				
				//draw first line
				graphics.moveTo(30,30); //set starting point
				graphics.lineTo(100,10);//draw line to the absolute coordinate x, y
				graphics.lineTo(100,30);//draw line to the absolute coordinate x, y


				graphics.lineStyle (5, 0xff9900);
				graphics.moveTo(500,400);
				graphics.lineTo(100,400);//draw line to the absolute coordinate x, y

				//draw an arc
				graphics.lineStyle (5, 0x0033FF);
				graphics.arc(
					 150,		  //The x-coordinate of the center of the circle
					 200,		  //The y-coordinate of the center of the circle
					 50,			//The radius of the circle
					 0,			 //The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
					 1.5*Math.PI,//The ending angle, in radians
					 false		 //clockwise/counterclockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
				);
				
				//and finally a filled ellipse
				graphics.beginFill(0x00cc00, 1);
				graphics.arc(
					 350,
					 200,
					 50,			//The radius of the circle
					 0,			 //The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
					 1.5*Math.PI,//The ending angle, in radians
					 false		 //clockwise/counterclockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
				);
				graphics.endFill();

				//There are more functions available, see the canvas reference for details: http://www.w3schools.com/tags/ref_canvas.asp			  

				//add to stage
				this.stage.addChild(graphics);
				
			}
	 });
});
