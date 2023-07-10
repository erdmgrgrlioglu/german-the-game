var cikti = document.getElementById("cikti");
var txt = document.getElementById("in");
var cikti2 = document.getElementById("cikti2");
var cikti3 = document.getElementById("cikti3");
var submit = document.getElementById('btnn');
var d = 3;
var x = 0;
var Alm = "";
var Tr = "";
var Trr = "";
var n = 1;
var k = 1;
var l = 1;
var m = 1;
var c = 0;
var renk = document.getElementById("cik");
var puan;

txt.addEventListener("keydown", enter);
submit.addEventListener("click", check);

function enter(ev){

	let target = ev.currentTarget;
	let char = ev.char || ev.charCode || ev.which;
	if (char == 13) {
		check();
	};
}

function hak() {

cikti2.innerHTML="Kelimenin Türkçesini Yazınız. Not: " + d + " Hakkınız Kaldı.";

}


function getRandom(a){

	return a[Math.floor(Math.random()*a.length)];

}

function reset(){

	document.body.style.backgroundColor = "#00cc33";
	time = 10000;
	count = 0;

}

function get(){

	d = 3;
	x = 0;
	Alm = "";
	Tr = "";
	n = 1;
	k = 1;
	l = 1;
	m = 1;
	c = 0;

	var b = getRandom(level[lvl]);

    while (k == 1) {
        if (b[x] == "_") {
            k = 0;
            x++;
            cikti.innerHTML = Alm;
        }
        else {
            Alm = (Alm + b[x]);
            x++;
        }
    }
    while (l == 1) {
        if (b[x] == "_") {
            l = 0;
            x++;
           	Trr = "";
            c = 1;
        }
        else if (b[x] == "q") {
            l = 0;
            m = 0;
            continue
        }
        else {
            Tr = (Tr + b[x]);
            x++;
        }
    }
    while (m == 1) {
        if (b[x] == "q") {
            m = 0;
        }
        else {
            Trr = (Trr + b[x]);
            x++;
        }
    }
    hak();
}

function check(){
	
	renk.id="cikk";

	var e = txt.value;
	if (e == Tr) {

		cikti3.innerHTML= "Doğru Cevap :)";
		get();
		renk.className = "alert alert-success";
		txt.value = "";
		d=3;
		puan+=3;
		reset();
		puann.innerHTML= "Puan: " + puan;

	}
	else if (c == 1) {
		if (e == Trr) {

			cikti3.innerHTML= "Doğru Cevap :)";
			renk.className = "alert alert-success";
			get();
			d=3;
			txt.value = "";
			puan+=3;
			reset();
			puann.innerHTML= "Puan: " + puan;
		}
	}
	else {
		if (d != 1) {

			cikti3.innerHTML="Yanlış Cevap :(";
			renk.className = "alert alert-danger";
			d--;
			hak();
			txt.value = "";
			puan--;
			puann.innerHTML= "Puan: " + puan;

		}
		else{

			cikti3.innerHTML="Doğru Cevap: " + Tr;
			renk.className = "alert alert-danger";
			get();
			txt.value = "";
			reset();
			puan--;
			puann.innerHTML= "Puan: " + puan;

		}

	}
}

get();