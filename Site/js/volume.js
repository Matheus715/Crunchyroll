var volumes = get_volumes();
var mangas = get_mangas();

var cod_manga = document.querySelector(".cod_manga");
var cod_volume = document.querySelector(".cod_volume");

cod_manga = cod_manga.textContent;
cod_volume = cod_volume.textContent;

var quant_pags;
for(var i = 0; i < volumes.length; i++){
	if(volumes[i].cod_volume == cod_volume){
		quant_pags = volumes[i].quant_pages;
	}
}

var pags = [];
for(var j = 1; j <= quant_pags; j++){
	pags.push(j+".jpg");
}


var next = document.querySelector(".next");
var previous = document.querySelector(".previous");
var cont_front = 0;
var cont_back = 1;

front = document.querySelector(".front");
back = document.querySelector(".back");

next.addEventListener("click", function(){
	if(cont_back < (pags.length - 1)){
		cont_front = cont_front + 2;
		front.src = pags[cont_front];
		cont_back = cont_back + 2;
		back.src = pags[cont_back];
	}
});

previous.addEventListener("click", function(){
	if(cont_front > 0){
		cont_front = cont_front - 2;
		front.src = pags[cont_front];
		cont_back = cont_back - 2;
		back.src = pags[cont_back];
	}

});

var bookmark = document.querySelector(".bookmark");

var last_front;
var last_back;
var bookmark_cont;

bookmark.addEventListener("click", function(){
	if(!bookmark_cont > 0){
		last_front = cont_front;
		last_back = cont_back;
		bookmark_cont = 1;
	}else{
		bookmark_cont = 0;
	}
	console.log(last_front);
	console.log(last_back);
});

var next_volume = document.querySelector(".next_volume");
var previous_volume = document.querySelector(".previous_volume");
var this_manga;
var this_volume;
var quant_volume = 0;

for(var k = 0; k < mangas.length; k++){
	if(mangas[k].cod_manga == cod_manga){
		this_manga = mangas[k];
	}
}

for(var l = 0; l < volumes.length; l++){
	if(volumes[l].cod_volume == cod_volume){
		this_volume = volumes[l];
	}
}

for(var m = 0; m < volumes.length; m++){
	if(volumes[m].manga  == cod_manga){
		quant_volume = quant_volume + 1;
	}
}

var previous_cod_volume = (this_volume.number - 1);
var next_cod_volume = (this_volume.number + 1);

if(previous_cod_volume <= 0){
	previous_volume.href = this_manga.path + "/manga_page.html";
}else{
	previous_volume.href = this_manga.path + "/volumes/volume" + previous_cod_volume + "/volume.html";
}

if(next_cod_volume > quant_volume){
	next_volume.href = this_manga.path + "/manga_page.html";
}else{
	next_volume.href = this_manga.path + "/volumes/volume" + next_cod_volume + "/volume.html";
}

var logo = document.querySelector(".a_link");
logo.href =  this_manga.path + "/manga_page.html";