/*foox main js file*/

var shake = 0;

var bgcolor_pick = [
    "lightblue",
    "rgba(176, 235, 49, 0.96)",
    "rgba(239, 61, 64, 0.81)",
    "rgba(239, 215, 61, 0.9)",
    "rgba(239, 135, 61, 0.82)",
    "rgba(183, 61, 239, 0.58)"
    ];

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

var selection = [];

window.onload = function() {

	//load all icons in the screen
	for(var i = 0; i < food_icons.length; i++) {
		document.getElementById('food_thread').innerHTML += '<a><img src="./img/'+food_icons[i]+'" name="'+food_icons[i]+'" style="width:50px;margin:10px;" onclick="img_res(this);"></a>';		
	}
} 


function img_res(img_data) {
   if(selection.indexOf(img_data.name) > -1) {
   img_data.className = "animated shake";
   img_data.style = "width:50px;margin:10px;";
   selection.splice(img_data.name);
   document.getElementById("unselect").play();
   }else{
   img_data.className = "animated bounceIn";
   img_data.style = "width:60px;margin:10px;border-radius:10px; background-color:"+bgcolor_pick[Math.floor(Math.random() * (bgcolor_pick.length - 1 + 1))]+";padding:10px;";
   selection.push(img_data.name);
   document.getElementById("select").play();

   }
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
			// if shaking call function!
			//document.body.style = "background-color:lightblue";
			shake++;
            shake_request();
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


 function shake_request() {
     if(shake == 20 && selection.length > 0) {
     	document.getElementById('food_thread').style.display="none";
     	for(var i=0;i < selection.length;i++) {
     	   var item = selection[i].replace('.png','');
     	  document.getElementById('output_res').innerHTML+='<h3 style="color:blue">'+item+'</h3>';

     	}
     	}else{
     	  setTimeout("shake=0;",1000);	
     	}
     	document.getElementById('output_res').style.display="block";
     }

 