var head_title = document.querySelector(".head_title");
var mylist = document.querySelector(".mylist");
var episodes_ul = document.querySelector(".episodes_ul");
var body_tittle = document.querySelector(".tittle");
var cod_anime = document.querySelector(".cod_anime");
cod_anime = cod_anime.textContent;
var cod_episode = document.querySelector(".cod_episode");
cod_episode = cod_episode.textContent;
var episodes_array = get_episodes();

for(var i = 0; i < episodes_array.length; i++){
	var li = document.createElement("li");
	var a = document.createElement("a");
	if(episodes_array[i].anime == cod_anime){

		if(episodes_array[i].cod_episode == cod_episode){
			li.classList.add("playing");
		}

		a.href = episodes_array[i].path + "/ep" + episodes_array[i].number + ".html";
		a.textContent = "Episódio " + episodes_array[i].number + ":" + episodes_array[i].name;

		episodes_ul.appendChild(li);
		li.appendChild(a);
	}
}

for(var j = 0; j < episodes_array.length; j++){
	if(episodes_array[j].cod_episode == cod_episode){
		head_title.textContent = "Episódio " + episodes_array[j].number + " | " + episodes_array[j].name;
		body_tittle.textContent = "Episódio " + episodes_array[j].number + " | " + episodes_array[j].name;
	}
}