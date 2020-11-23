var lists = get_lists();
var animes = get_animes();
var episodes_array = get_episodes();
var season_array = get_seasons();
var cod_user = document.querySelector(".cod_user");
var container = document.querySelector(".my_list_container");

for(var i = 0 ; i < lists.length; i++){
	var this_anime;
	if(lists[i].cod_user == cod_user.textContent){

		for(var j = 0; j < animes.length; j++){
			if(lists[i].anime == animes[j].cod_anime){
				this_anime = animes[j];
			}
		}

		var quant_ep = 0;
		for(var m = 0; m < episodes_array.length; m++){
			if(episodes_array[m].anime == this_anime.cod_anime){
				quant_ep = quant_ep + 1;
			}
		}

		var quant_temp = 0;
		for(var n = 0; n < season_array.length; n++){
			if(season_array[n].anime == this_anime.cod_anime){
				quant_temp = quant_temp + 1;
			}
		}

		var anime = document.createElement("div");
		var a_anime = document.createElement("a");
		var img = document.createElement("img");

		var infos = document.createElement("div");

		var nome = document.createElement("h1");
		var a_nome = document.createElement("a");

		var categories = document.createElement("div");
		
		var a_category1 = document.createElement("a");
		var a_category2 = document.createElement("a");
		var a_category3 = document.createElement("a");
		var a_category4 = document.createElement("a");

		var p_category3 = document.createElement("p");
		var p_category4 = document.createElement("p");
		var p_category1 = document.createElement("p");
		var p_category2 = document.createElement("p");

		var temporadas = document.createElement("h2");
		var temporadas_info = document.createElement("p");
		var episodios = document.createElement("h2");
		var episodios_info = document.createElement("p");

		var buttons = document.createElement("div");
		var a_page = document.createElement("a");
		var a_play = document.createElement("a");
		var page = document.createElement("img");
		var play = document.createElement("img");

		anime.classList.add("anime");
		img.classList.add("poster")

		infos.classList.add("infos");

		categories.classList.add("categories");

		p_category1.classList.add("category");
		p_category2.classList.add("category");
		p_category3.classList.add("category");
		p_category4.classList.add("category");

		temporadas.classList.add("temp");
		temporadas_info.classList.add("temp_info");
		episodios.classList.add("ep");
		episodios_info.classList.add("ep_info");

		buttons.classList.add("buttons");
		page.classList.add("page");
		play.classList.add("play");

		img.src = this_anime.path + "/poster.jpg";
		a_anime.href = this_anime.path + "/anime_page.html";
		a_nome.href = this_anime.path + "/anime_page.html";
		a_page.href = this_anime.path + "/anime_page.html";

		nome.textContent = this_anime.name;

		a_category1.href = "";
		a_category2.href = "";
		a_category3.href = "";
		a_category4.href = "";
		p_category1.textContent = this_anime.class_1;
		p_category2.textContent = this_anime.class_2;
		p_category3.textContent = this_anime.class_3;
		p_category4.textContent = this_anime.class_4;

		temporadas.textContent = "Temporadas: ";
		episodios.textContent = "Episódios: ";
		temporadas_info.textContent = quant_temp;
		episodios_info.textContent = quant_ep;

		page.src = "../img/icones/infos.png";
		play.src = "../img/icones/play.png";
		a_play.href = this_anime.path + "/episodes/ep1.html";

		container.appendChild(anime);

		anime.appendChild(a_anime);
		a_anime.appendChild(img);

		anime.appendChild(infos);
		
		infos.appendChild(a_nome);
		a_nome.appendChild(nome);

		infos.appendChild(categories);

		categories.appendChild(a_category1);
		categories.appendChild(a_category2);
		categories.appendChild(a_category3);
		categories.appendChild(a_category4);

		a_category1.appendChild(p_category1);
		a_category2.appendChild(p_category2);
		a_category3.appendChild(p_category3);
		a_category4.appendChild(p_category4);

		infos.appendChild(temporadas);
		infos.appendChild(temporadas_info);
		infos.appendChild(episodios);
		infos.appendChild(episodios_info);

		infos.appendChild(buttons);
		buttons.appendChild(a_page);
		a_page.appendChild(page);
		buttons.appendChild(a_play);
		a_play.appendChild(play);

	}
}