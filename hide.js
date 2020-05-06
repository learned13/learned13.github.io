window.addEventListener("scroll", function(event){

	var top = this.pageYOffset;

	var layers = document.getElementsByClassName("parallax");
	var layer, speed, yPos;
	for (var i = 0; i < layers.length; i++) {
		layer = layers[i];
		speed = layer.getAttribute('data-speed');
		var yPos = (top * speed / 100);
		layer.setAttribute('style', 'transform: translateY(' + yPos + 'px)');

	}
});

var percent;

function getScrollPercent() {
    percent = window.pageYOffset / document.body.scrollHeight;
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


window.addEventListener("scroll", getScrollPercent);
window.addEventListener("resize", function(){
	if (!isMobileDevice()){
		var Ypos = document.body.scrollHeight * percent;
		window.scrollTo(0, Ypos);
	}
});

var myVar = setInterval(percentCheck, 10);

function percentCheck() {
	if (percent > .59) {
		var d = new Date();
		var s = d.getSeconds();
		var m = d.getMilliseconds();
		var a = Math.floor((s + (m / 1000))*100)/100;
		var x1 = 45*Math.sin((Math.PI/30)*a)+50;
		var y1 = -45*Math.cos((Math.PI/30)*a)+50;
		var x2 = 45*Math.sin((Math.PI/30)*a + (Math.PI/3.5))+50;
		var y2 = -45*Math.cos((Math.PI/30)*a + (Math.PI/3.5))+50;
		var x3 = 45*Math.sin((Math.PI/30)*a + (2*Math.PI/3.5))+50;
		var y3 = -45*Math.cos((Math.PI/30)*a + (2*Math.PI/3.5))+50;
		var x4 = 45*Math.sin((Math.PI/30)*a + (3*Math.PI/3.5))+50;
		var y4 = -45*Math.cos((Math.PI/30)*a + (3*Math.PI/3.5))+50;
		var x5 = 45*Math.sin((Math.PI/30)*a + (4*Math.PI/3.5))+50;
		var y5 = -45*Math.cos((Math.PI/30)*a + (4*Math.PI/3.5))+50;
		var x6 = 45*Math.sin((Math.PI/30)*a + (5*Math.PI/3.5))+50;
		var y6 = -45*Math.cos((Math.PI/30)*a + (5*Math.PI/3.5))+50;
		var x7 = 45*Math.sin((Math.PI/30)*a + (6*Math.PI/3.5))+50;
		var y7 = -45*Math.cos((Math.PI/30)*a + (6*Math.PI/3.5))+50;
		
		document.getElementById("square_animation").style.backgroundPosition = x1+"% "+y1+"%,"+x2+"% "+y2+"%,"+x3+"% "+y3+"%,"+x4+"% "+y4+"%,"+x5+"% "+y5+"%,"+x6+"% "+y6+"%,"+x7+"% "+y7+"%";
	}
}

