var select = document.querySelector(".option");
var seasons = get_seasons();
var cod_anime = document.querySelector(".cod_anime");
cod_anime = cod_anime.textContent;

for(var i = 0; i < seasons.length; i++){
	if(seasons[i].anime == cod_anime){
		var option = document.createElement("option");
		option.nodeValue = seasons[i].value_name;
		option.textContent =  seasons[i].value_name + " Temporada";
		select.appendChild(option);
	}
}