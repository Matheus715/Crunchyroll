var animes = get_animes();
var episodes = get_episodes();
var seasons = get_seasons();
var cod_anime = document.querySelector(".cod_anime");
cod_anime = cod_anime.textContent;
var anime_div = document.querySelector(".anime");
var main = document.querySelector(".episodes");

for(var m = 0; m < animes.length; m++){
	if(animes[m].cod_anime == cod_anime){
		var quant_ep = 0;
		for(var l = 0; l < episodes.length; l++){
			if(episodes[l].anime == animes[m].cod_anime){
				quant_ep = quant_ep + 1;
			}
		}

		var quant_temp = 0;
		for(var k = 0; k < seasons.length; k++){
			if(seasons[k].anime == animes[m].cod_anime){
				quant_temp = quant_temp + 1;
			}
		}

		var a_anime = document.createElement("a");
		var poster = document.createElement("img");
		var infos = document.createElement("div");
		var title = document.createElement("h1");
		var categories = document.createElement("div");

		var a1 = document.createElement("a");
		var a2 = document.createElement("a");
		var a3 = document.createElement("a");
		var a4 = document.createElement("a");

		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var p3 = document.createElement("p");
		var p4 = document.createElement("p");

		var temps = document.createElement("div");
		var temp_info = document.createElement("p");
		var ep_info = document.createElement("p");
		var synopsis = document.createElement("p");
		var add = document.createElement("img");
		var remove = document.createElement("img");

		infos.classList.add("infos");
		title.classList.add("title");
		categories.classList.add("categories");
		p1.classList.add("anime_category");
		p2.classList.add("anime_category");
		p3.classList.add("anime_category");
		p4.classList.add("anime_category");
		temps.classList.add("temps");
		synopsis.classList.add("synopsis");
		add.classList.add("add");
		add.id = "add_to_list";
		remove.classList.add("remove");
		remove.classList.add("invisible");
		remove.id = "add_to_list";

		a_anime.href =  animes[m].path + "/anime_page.html";
		poster.src = animes[m].path + "/poster.jpg";
		title.textContent = animes[m].name;
		p1.textContent = animes[m].class_1;
		p2.textContent = animes[m].class_2;
		p3.textContent = animes[m].class_3;
		p4.textContent = animes[m].class_4;
		temp_info.textContent = "Temporadas: " + quant_temp;
		ep_info.textContent = "Episódios: " + quant_ep;
		synopsis.textContent = animes[m].synopsis;
		add.src = "../../Site/img/icones/add_list.png";
		remove.src = "../../Site/img/icones/remove_list.png";

		anime_div.appendChild(a_anime);
		anime_div.appendChild(infos);
		anime_div.appendChild(add);
		anime_div.appendChild(remove);

		a_anime.appendChild(poster);

		infos.appendChild(title);
		infos.appendChild(categories);
		infos.appendChild(temps);
		infos.appendChild(synopsis);

		categories.appendChild(a1);
		categories.appendChild(a2);
		categories.appendChild(a3);
		categories.appendChild(a4);

		a1.appendChild(p1);
		a2.appendChild(p2);
		a3.appendChild(p3);
		a4.appendChild(p4);

		temps.appendChild(temp_info);
		temps.appendChild(ep_info);

	}
}

for(var i = 0; i < episodes.length;i++){
	if(episodes[i].anime == cod_anime){
		var episode = document.createElement("div");
		var thumbnail = document.createElement("div");
		var a_ep =  document.createElement("a");
		var thumb =  document.createElement("img");
		var play_button =  document.createElement("img");
		var text = document.createElement("div");
		var title = document.createElement("h1");
		var anime_sinopse = document.createElement("p");
	
		episode.classList.add("episode");

		for(var j = 0; j < seasons.length; j++){
			if(episodes[i].season == seasons[j].cod_season){
				episode.classList.add(seasons[j].value_name);
			}
		}

		thumbnail.classList.add("thumbnail");
		thumb.classList.add("thumb");
		play_button.classList.add("play_button");
		text.classList.add("text");
		anime_sinopse.classList.add("anime_sinopse");

		a_ep.href = episodes[i].path + "/ep" + episodes[i].number + ".html";
		thumb.src = episodes[i].path + "/ep" + episodes[i].number + ".jpg";
		play_button.src = "../../Site/img/icones/play_anime.png";
		title.textContent = "Episódio " + episodes[i].number + ": " + episodes[i].name;
		anime_sinopse.textContent = episodes[i].synopsis;
	
		main.appendChild(episode);
		episode.appendChild(thumbnail);
		thumbnail.appendChild(a_ep);
		a_ep.appendChild(thumb);
		a_ep.appendChild(play_button);
		episode.appendChild(text);
		text.appendChild(title);
		text.appendChild(anime_sinopse);
	}
}
