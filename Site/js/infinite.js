var adicionados = 0;

var extension_button = document.querySelector(".extension_button");

var animes_array = get_animes();
var episodes_array = get_episodes();
var season_array = get_seasons();
var highlights= [];

extension_button.addEventListener('click', function() {
	var main = document.querySelector("main");
	if (adicionados < 5){

		for(var j = 0; j <= 4; j++){

			var content = document.createElement("div");
			var h1 = document.createElement("h1");
			var container = document.createElement("div");

			container.classList.add("container");
			content.classList.add("content");

			h1.textContent = "Conteúdo";

			main.appendChild(content);
			content.appendChild(h1);
			content.appendChild(container);
			
			for(var i = 0; i < 4; i++){

				var num = Math.floor(Math.random() * animes.length);

				var quant_ep = 0;
				for(var m = 0; m < episodes_array.length; m++){
					if(episodes_array[m].anime == animes_array[num].cod_anime){
						quant_ep = quant_ep + 1;
					}
				}

				var quant_temp = 0;
				for(var n = 0; n < season_array.length; n++){
					if(season_array[n].anime == animes_array[num].cod_anime){
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

				img.src = animes_array[num].path + "/poster.jpg";
				a_anime.href = animes_array[num].path + "/anime_page.html";
				a_nome.href = animes_array[num].path + "/anime_page.html";
				a_page.href = animes_array[num].path + "/anime_page.html";

				nome.textContent = animes_array[num].name;

				a_category1.href = "";
				a_category2.href = "";
				a_category3.href = "";
				a_category4.href = "";
				p_category1.textContent = animes_array[num].class_1;
				p_category2.textContent = animes_array[num].class_2;
				p_category3.textContent = animes_array[num].class_3;
				p_category4.textContent = animes_array[num].class_4;

				temporadas.textContent = "Temporadas: ";
				episodios.textContent = "Episódios: ";
				temporadas_info.textContent = quant_temp;
				episodios_info.textContent = quant_ep;

				page.src = "../img/icones/infos.png";
				play.src = "../img/icones/play.png";
				a_play.href = animes_array[num].path + "/episodes/ep1.html";

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

			adicionados = adicionados + 1;
		}
	}else if(adicionados >= 5){

		for(var o = 0; o < animes_array.length;o++){
			if(animes_array[o].highlight == 1){
				highlights.push(animes_array[o]);
			}
		}

		var num2 = Math.floor(Math.random() * highlights.length);

		var quant_ep = 0;
		for(var p = 0; p < episodes_array.length; p++){
			if(episodes_array[p].anime == highlights[num2].cod_anime){
				quant_ep = quant_ep + 1;
			}
		}

		var quant_temp = 0;
		for(var n = 0; n < season_array.length; n++){
			if(season_array[n].anime == highlights[num2].cod_anime){
				quant_temp = quant_temp + 1;
			}
		}

		var highlight = document.createElement("div");
		var img_highlight = document.createElement("img");
		var a_img = document.createElement("a");
		var infos_highlight = document.createElement("div");
		var titulo_highlight = document.createElement("h1");
		var a_titulo = document.createElement("a");
		var categories_highlight = document.createElement("div");
		var a_highlight1 = document.createElement("a");
		var a_highlight2 = document.createElement("a");
		var a_highlight3 = document.createElement("a");
		var a_highlight4 = document.createElement("a");
		var p_highlight1 = document.createElement("p");
		var p_highlight2 = document.createElement("p");
		var p_highlight3 = document.createElement("p");
		var p_highlight4 = document.createElement("p");
		var temp = document.createElement("div");
		var temp_highlight = document.createElement("p");
		var ep_highlight = document.createElement("p");
		var synopsis_highlight = document.createElement("p");

		highlight.classList.add("highlight");
		infos_highlight.classList.add("infos");
		categories_highlight.classList.add("categories");
		p_highlight1.classList.add("category_highlight");
		p_highlight2.classList.add("category_highlight");
		p_highlight3.classList.add("category_highlight");
		p_highlight4.classList.add("category_highlight");
		temp.classList.add("temps");
		synopsis_highlight.classList.add("synopsis");

		img_highlight.src = highlights[num2].path + "/poster.jpg";
		a_img.href = highlights[num2].path + "/anime_page.html";
		titulo_highlight.textContent = highlights[num2].name;
		a_titulo.href = highlights[num2].path + "/anime_page.html";
		p_highlight1.textContent = highlights[num2].class_1;
		p_highlight2.textContent = highlights[num2].class_2;
		p_highlight3.textContent = highlights[num2].class_3;
		p_highlight4.textContent = highlights[num2].class_4;
		temp_highlight.textContent = "Temporadas: " + quant_temp;;
		ep_highlight.textContent = "Episódios: " + quant_ep;;
		synopsis_highlight.textContent = highlights[num2].synopsis;

		main.appendChild(highlight);

		highlight.appendChild(a_img);
		a_img.appendChild(img_highlight);
		highlight.appendChild(infos_highlight);
		infos_highlight.appendChild(a_titulo);
		a_titulo.appendChild(titulo_highlight);
		infos_highlight.appendChild(categories_highlight);
		categories_highlight.appendChild(a_highlight1);
		categories_highlight.appendChild(a_highlight2);
		categories_highlight.appendChild(a_highlight3);
		categories_highlight.appendChild(a_highlight4);
		a_highlight1.appendChild(p_highlight1);
		a_highlight2.appendChild(p_highlight2);
		a_highlight3.appendChild(p_highlight3);
		a_highlight4.appendChild(p_highlight4);
		infos_highlight.appendChild(temp);
		temp.appendChild(temp_highlight);
		temp.appendChild(ep_highlight);
		infos_highlight.appendChild(synopsis_highlight);

		adicionados = 0;
	}
});