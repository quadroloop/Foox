/*foox main js file*/

var color_pick = ["lightblue","lightgreen","lightred"]

var food_icons = [
"apple.png",
"doughnut.png ",
"icecreamcone.png ",
"pudding.png",
"bacon.png ",
"egg.png ",
"ketchup.png ",
"ricecake.png",
"banana.png ",
"sili.png",
"brocolli.png ",
"meatball.png ",
"soda.png",
"cake.png ",
"milk.png ",
"strawberry.png",
"carrot.png ",
"milkshake.png ",
"Sundae.png",
"cherry.png ",
"fortunecookie.png ",
"orange.png ",
"taco.png",
"chocolate.png ",
"frenchfries.png ",
"peach.png ",
"talong.png",
"coffee.png ",
"friedchicken.png ",
"pea.png ",
"toast.png",
"cookie.png ",
"grapes.png ",
"pineapple.png ",
"watermelon.png",
"corn.png ",
"hamburger.png ",
"pizza.png",
"croissant.png ",
"hotdog.png ",
"popsicle.png",
];
window.onload = function() {
	//load all icons in the screen
	for(var i = 0; i < food_icons.length; i++) {
		document.getElementById('food_thread').innerHTML += '<a><img src="./img/'+food_icons[i]+'" style="width:50px;margin:10px;" onclick="img_res(this);"></a>';
	}
} 


function img_res(img_data) {
   img_data.className = "animated bounceIn";
   img_data.style = "width:80px;margin:10px;border-radius:10px; background-color:lightblue;padding:10px;";
}

var btn_counter = 0;

function ui_counter() {
   btn_counter ++;
   if(btn_counter == 2) {	
   this.blur();
   btn_counter = 0;
}
}

var x = 0, y = 0,
    vx = 0, vy = 0,
	ax = 0, ay = 0;
	

if (window.DeviceMotionEvent != undefined) {
	window.ondevicemotion = function(e) {
		ax = event.accelerationIncludingGravity.x * 5;
		ay = event.accelerationIncludingGravity.y * 5;
		// shake catch logic
		if ( ay > 50  && ax > 20 || ax > -20) { // shaking algo
			document.body.style  = "background-color:#fff";
		}else{
			document.body.style = "background-color:lightblue";
		}
		
	}


	setInterval( function() {
		var landscapeOrientation = window.innerWidth/window.innerHeight > 1;
		if ( landscapeOrientation) {
			vx = vx + ay;
			vy = vy + ax;
		} else {
			vy = vy - ay;
			vx = vx + ax;
		}
		vx = vx * 0.98;
		vy = vy * 0.98;
		y = parseInt(y + vy / 50);
		x = parseInt(x + vx / 50);
		
	}, 2000);
} 


 