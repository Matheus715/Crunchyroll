var lists = get_lists();
var animes_array = get_animes();
var cod_user = document.querySelector(".cod_user");
var container = document.querySelector(".animes");

for(var i = 0 ; i < lists.length; i++){
	var this_anime;
	if(lists[i].cod_user == cod_user.textContent){

		for(var j = 0; j < animes_array.length; j++){
			if(lists[i].anime == animes_array[j].cod_anime){
				this_anime = animes_array[j];
			}
		}

		var anime = document.createElement("div");
		var a_anime = document.createElement("a");
		var img = document.createElement("img");

		anime.classList.add("anime");
		img.src = this_anime.path_server + "/poster.jpg";
		a_anime.href = this_anime.path_server + "/anime_page.html";

		container.appendChild(anime);
		anime.appendChild(a_anime);
		a_anime.appendChild(img);
	}
}