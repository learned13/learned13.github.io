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

window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

window.addEventListener("scroll", getScrollPercent);
window.addEventListener("resize", function(){
	if (!window.mobileAndTabletCheck){
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

