
var canvas = new frabic.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	frabic.Image.fromURL("golf-h.png" , function(Img) {
		hole_Object = Img;
		hole_Object.scaleToWidth(50);
		hole_Object.scaleToHeight(50);
		hole_Object.set({
			top:hole_y,
			//left:hole_x;
		})
		canvas.add(hole_Object)
	})
	new_image();
}

function new_image()
{
	frabic.Image.fromURL("ball.png" , function(Img) {
		ball_Object = Img;
		ball_Object.scaleToWidth(50);
		ball_Object.scaleToHeight(50);
		ball_Object.set({
			top:ball_y,
			//left:ball_x;
		})
		canvas.add(ball_Object)
})

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_Object)
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!";
	document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >= 450)
		{
			ball_y = ball_y - block_image_height;
			console.log("block_image_height = " + block_image_height);
			//console.log("When Up kay is pressed, X = " + ball_x " , Y = " + ball_y)
			canvas.remove(ball_Object)
			new_image();
		}
	}

	function down()
	{
		 if(ball_y <= 450)
		 {
			 ball_y = ball_y + block_image_height;
			 console.log("block_image_height = "  + block_image_height);
			// console.log("When Down key is pressed, X = " + ball_x " , Y = " + ball_y)
			 canvas.remove(ball_Object)
			 new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block_image_width = " + block_image_width);
			//console.log("When Left key is pressed, X = " + ball_x " , Y = " + ball_y)
			canvas.remove(ball_Object)
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("block_image_width = " + block_image_width);
			//console.log("When Right key is pressed, X = " + ball_x " , Y = " + ball_y)
			canvas.remove(ball_Object)
			new_image();
		}
	}
}