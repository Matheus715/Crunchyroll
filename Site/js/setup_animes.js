setup_anime()

function setup_anime(){

	var animes_array = get_animes();
	var episodes_array = get_episodes();
	var season_array = get_seasons();

	for(var i = 0; i < animes_array.length; i++){

		var quant_ep = 0;
		for(var j = 0; j < episodes_array.length; j++){
			if(episodes_array[j].anime == animes_array[i].cod_anime){
				quant_ep = quant_ep + 1;
			}
		}

		var quant_temp = 0;
		for(var k = 0; k < season_array.length; k++){
			if(season_array[k].anime == animes_array[i].cod_anime){
				quant_temp = quant_temp + 1;
			}
		}

		var animes_ul = document.querySelector(".animes");

		var anime_container = document.createElement("li");
		var anime_div = document.createElement("div");
		var a_anime = document.createElement("a");
		var poster = document.createElement("img");
		var infos = document.createElement("div");
		var a_title = document.createElement("a");
		var anime_title = document.createElement("h1");
		var categories = document.createElement("div");
		var a1 = document.createElement("a");
		var a2 = document.createElement("a");
		var a3 = document.createElement("a");
		var a4 = document.createElement("a");
		var category1 = document.createElement("p");
		var category2 = document.createElement("p");
		var category3 = document.createElement("p");
		var category4 = document.createElement("p");
		var temp = document.createElement("h2");
		var temp_info = document.createElement("p");
		var ep = document.createElement("h2");
		var ep_info = document.createElement("p");
		var sinopse = document.createElement("div");
		var a_sinopse = document.createElement("a");
	
		anime_container.classList.add("anime_container");
		anime_div.classList.add("anime");
		poster.classList.add("poster");
		infos.classList.add("infos");
		anime_title.classList.add("anime_title");
		categories.classList.add("categories");
		category1.classList.add("category");
		category2.classList.add("category");
		category3.classList.add("category");
		category4.classList.add("category");
		temp.classList.add("temp");
		temp_info.classList.add("temp_info");
		ep.classList.add("ep");
		ep_info.classList.add("ep_info");
		sinopse.classList.add("sinopse");
		a_anime.href = animes_array[i].path + "/anime_page.html";
		poster.src = animes_array[i].path + "/poster.jpg";
		anime_title.textContent = animes_array[i].name;
		category1.textContent = animes_array[i].class_1;
		category2.textContent = animes_array[i].class_2;
		category3.textContent = animes_array[i].class_3;
		category4.textContent = animes_array[i].class_4;
		temp.textContent = "Temporadas:";
	
		temp_info.textContent = quant_temp;
		ep.textContent = "Episódios:";
		ep_info.textContent = quant_ep;
	
		a_sinopse.href = animes_array[i].path + "/anime_page.html";
		a_sinopse.textContent = animes_array[i].synopsis;
	
		animes_ul.appendChild(anime_container);
		anime_container.appendChild(anime_div);
		anime_div.appendChild(a_anime);
		a_anime.appendChild(poster);
		anime_div.appendChild(infos);
		infos.appendChild(a_title);
		a_title.appendChild(anime_title);
	
		infos.appendChild(categories);
		categories.appendChild(a1);
		categories.appendChild(a2);
		categories.appendChild(a3);
		categories.appendChild(a4);
	
		a1.appendChild(category1);
		a2.appendChild(category2);
		a3.appendChild(category3);
		a4.appendChild(category4);
	
		infos.appendChild(temp);
		infos.appendChild(temp_info);
		infos.appendChild(ep);
		infos.appendChild(ep_info);
	
		anime_div.appendChild(sinopse);
		sinopse.appendChild(a_sinopse);
	}
}
