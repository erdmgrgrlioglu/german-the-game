var submittt = document.getElementById("btun");
var butons = document.getElementById("baran");
var items = butons.querySelectorAll("button");
var gorunum = document.getElementById("gizle");
var baran = document.getElementById("baran");
var soru = document.getElementById("soru");
var puann = document.getElementById("puan");

for (var i = items.length - 1; i >= 0; i--) {
	items[i].addEventListener("click", editItem);
	items[i].addEventListener("blur", resetSelection);
}

submittt.addEventListener("click", Redirect);


function editItem(){

	this.className = "btn btn-primary";
	lvl=this.id;
	gorunum.className = "show"

}


function Redirect() {

	get();
	puan=0;
    gorunum.className = "hide";
    baran.className = "hide";
    soru.className = "show";
    puann.className = "show";
    puan=0;
	puann.innerHTML= "Puan: " + puan;
    document.getElementById("baslik").innerHTML = "Almanca Oyunu";
    document.body.style.backgroundColor = "#00cc33"
    



}


function resetSelection(){

	this.className = "btn btn-secondary"
	gorunum.className = "hidelittle"

}