var div_animes = document.querySelector(".animes");

var anime_array = get_animes();

for(var i = 0; i < anime_array.length; i++){
	if(anime_array[i].releasing_status = 1){
		var div_anime = document.createElement("div");
		var title = document.createElement("h1");
		var poster = document.createElement("img");
		var broadcast = document.createElement("div");
		var time = document.createElement("h2");

		div_anime.classList.add("anime");
		div_anime.classList.add(anime_array[i].release_date);
		title.classList.add("name");
		poster.classList.add("poster");
		broadcast.classList.add("broadcast");
		time.classList.add("time");

		title.textContent = anime_array[i].name;
		poster.src = anime_array[i].path + "/poster.jpg";
		time.textContent = anime_array[i].release_hour;

		div_animes.appendChild(div_anime);
		div_anime.appendChild(title);
		div_anime.appendChild(poster);
		div_anime.appendChild(broadcast);
		broadcast.appendChild(time);


	}
}

