var volumes = get_volumes();
var mangas = get_mangas();
var manga = document.querySelector(".manga");
var cod_manga = document.querySelector(".cod_manga");
var main = document.querySelector(".volumes");
cod_manga = cod_manga.textContent;

for(var j = 0; j < mangas.length; j++){
	if(mangas[j].cod_manga == cod_manga){

		var a_manga = document.createElement("a");
		var poster = document.createElement("img");
		var infos = document.createElement("div");
		var title = document.createElement("h1");
		var categories = document.createElement("div");

		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var p3 = document.createElement("p");
		var p4 = document.createElement("p");

		var synopsis = document.createElement("p");

		infos.classList.add("infos");
		poster.classList.add("poster")
		categories.classList.add("categories");
		p1.classList.add("category");
		p2.classList.add("category");
		p3.classList.add("category");
		p4.classList.add("category");

		synopsis.classList.add("synopsis");

		a_manga.href =  mangas[j].path + "/anime_page.html";
		poster.src = mangas[j].path + "/poster.jpg";
		title.textContent = mangas[j].name;
		p1.textContent = mangas[j].class_1;
		p2.textContent = mangas[j].class_2;
		p3.textContent = mangas[j].class_3;
		p4.textContent = mangas[j].class_4;
		synopsis.textContent = mangas[j].synopsis;

		manga.appendChild(poster);
		manga.appendChild(infos);

		infos.appendChild(title);
		infos.appendChild(categories);
		infos.appendChild(synopsis);

		categories.appendChild(p1);
		categories.appendChild(p2);
		categories.appendChild(p3);
		categories.appendChild(p4);

	}
}

for(var i = 0; i < volumes.length; i++){

	if(volumes[i].manga == cod_manga){
		var volume = document.createElement("div");
		var a_volume = document.createElement("a");
		var cover = document.createElement("img");
		var volume_title = document.createElement("h1");
	
		volume.classList.add("volume");
	
		a_volume.href = volumes[i].path + "/volume.html";
		cover.src = volumes[i].path + "/cover.png";
		if(volumes[i].name == ""){
			volume_title.textContent = "Volume " + volumes[i].number;
		}else{
			volume_title.textContent = "Volume " + volumes[i].number + " | " + volumes[i].name;
		}
	
		main.appendChild(volume);
		volume.appendChild(a_volume);
		a_volume.appendChild(cover);
		a_volume.appendChild(volume_title);
	}
};
