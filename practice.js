/////////////////
/////////////
////////////////

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// ADDING COLOR PICKER

var color = "#FEFCD7";
var colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("change", function(event){
	color = colorPicker.value; 
});

// context.moveTo(0,0); // Means move the pen inside the canvas
// Move the pen/hand/tool to 100,100
context.moveTo(100,100);
// Draw a line to 200,200
context.lineTo(200,200); // This will tell what line to draw
// WITHOUT MOVING THE PEN, draw to 300,100
context.lineTo(300,100);
context.lineTo(100,200);
context.lineTo(300,150);
context.lineTo(100,100);
context.strokeStyle = color;
// context.stroke(); // This will actually draw the line

// Draw a circle
context.beginPath();
context.fillStyle = color;
context.arc(200,200,50,0,1.5*Math.PI);
// context.fill();
// context.stroke(); // This will draw the border

// PI is a property ofthe Math object
// context.arc(x,y,r,sAngle,eAngle)

var x = 200;
var y = 200;
var r = 50;
var xDirection = 1;
var yDirection = 1;
// var red = 0;
// var blue = 0;
// var green = 0;

function drawBall(){
	
	context.fillStyle = color;
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.clearRect(0,0,680,453); // This will draw a rectangle and clear the section of screen
	context.fill();
	if ((x > 680-r) || (x < r)){
		// we have reached the right side. Reverse!
		xDirection = -xDirection;
	}
	if ((y > 453-r) || (y < r)){
		// we have reached the right side. Reverse!
		yDirection = -yDirection;
	}
	x += 3 * xDirection;
	y += 1 * yDirection;
	// var randomX = Math.random() * 4
	// var randomY = Math.random() * 4
	// x += randomX * xDirection;
	// y += randomY * yDirection;
	// red += 1;
	// blue += 1;
	// green += 1;

}

var ball = setInterval(drawBall,10); // We are passing drawBall

var hit = 0;
var miss = 0;
canvas.addEventListener("click", function(event){
    if(Math.sqrt((event.layerY - y) * (event.layerY - y) + (event.layerX - x) * (event.layerX - x)) < (2 * r)){
        // console.log("Hit");
        hit++;
    }
    else{
        // console.log("Miss");
        miss++;
    }
    document.getElementById("hit-count").innerHTML = hit;
	document.getElementById("miss-count").innerHTML = miss;
});


///////////////////////////////////////////////////////////////////////////
//////////////////////INIT COMMIT/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// // console.log("Test JS")

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");

// //COLOR PICKER

// var color = "#fefcd7"
// var colorPicker = document.getElementById("color-picker");
// colorPicker.addEventListener("change", function(event){
// 	color = colorPicker.value;
// });






// context.moveTo(0,0); // Means move the pen inside the canvas
// // Move pen to 100,100
// context.moveTo(100,100);
// // Draw a line to (200,200)
// context.lineTo(200,200); //This tells you what line to draw
// //WITHOUT MOVING THE PEN, draw to 300,100
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.strokeStyle = "#ff0000";
// // context.stroke();

// // Draw a circle!
// context.beginPath()
// context.fillStyle = color
// context.arc(200,200,50,0,2*Math.PI)
// // context.fill();
// // context.stroke(); // This will draw the line (border)

// // PI is a property ofthe Math object
// // context.arc(x,y,r,sAngle,eAngle)







// var x = 200;
// var y = 200;
// var radius = 50;
// var xDirection = 1;
// var yDirection = 1;
// // var red = 0;
// // var blue = 0;
// // var green = 0;


// function drawBall(){
// 	// context.fillStyle = "#"+red+blue+green;
// 	context.fillStyle = "#fefcd7";
// 	context.beginPath();
// 	context.arc(x,y,radius,0,2*Math.PI);
// 	context.clearRect(0,0,500,500); 
// 	context.fill();
// 	if((x > 500-radius) || (x < radius)){
// 		// we have reached the right side. Reverse!
// 		xDirection = -xDirection;
// 	}
// 	if((y > 500-radius) || (y < radius)){
// 		yDirection = -yDirection;
// 	}

// 	x += 3 * xDirection;
// 	y += 1 * yDirection;
// 	// var randomX = Math.random() * 5
// 	// var randomY = Math.random() * 5
// 	// x += randomX * xDirection;
// 	// y += randomY * yDirection;
// 	// red += 5;
// 	// blue += 1;
// 	// green += 1;


// 	// dx = event.x - x
// 	// dy = event.y - y
// 	// rad = hypot(dx,dy)
// 	// dx = dx / dist
// 	// dy = dy / dist
	
// }

// var ball = setInterval(drawBall,25); //Calling function every 20

// // canvas.addEventListener("click", function(event){
// // 	console.log(event.x, event.y);
	
// // });
// //////////////////////////////////////////////////
// var hit = 0;
// var miss = 0;
// canvas.addEventListener("click", function(event){
//     if(Math.sqrt((event.layerY - y) * (event.layerY - y) + (event.layerX - x) * (event.layerX - x)) < (2 * r)){
//         // console.log("Hit");
//         hit++;
//     }
//     else{
//         // console.log("Miss");
//         miss++;
//     }
//     document.getElementById("hit-count").innerHTML = hit;
// 	document.getElementById("miss-count").innerHTML = miss;
// });
