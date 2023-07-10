var count = 0;
var colours = ["#ffcc33", "#ff9933", "#ff6633", "#ff0000"];
var time = 7000;

document.getElementById("btun").addEventListener("click", Countdown);


function Countdown(){
	count=0;
	b = (time/4);
	var timer = setInterval(color, b);

	function color(){

		if (count == 4) {
 			end();
 		}
		document.body.style.backgroundColor = colours[count];
		count++;
	}
	function end(){
		clearInterval(timer);
		alert("Game Over... Doğru Cevap: " + Tr);
    	baran.className = "show";
    	soru.className = "hide";
    	puann.className = "hide";
    	renk.id="cik";
    	document.getElementById("baslik").innerHTML = "Ünite Seç:";
    	document.body.style.backgroundColor = "#9900cc";

	}
}



