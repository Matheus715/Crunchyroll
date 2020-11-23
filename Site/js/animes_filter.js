var inner_search_bar = document.querySelector(".inner_search_bar");

inner_search_bar.addEventListener("input", function(){
	var animes = document.querySelectorAll(".anime_container");
	if (this.value.length > 0){
		for (var i = 0; i < animes.length; i++){
			var anime = animes[i];
			var name = anime.querySelector(".anime_title");
			name = name.textContent;
			var expressao = new RegExp(this.value, "i");
			if (!expressao.test(name)){
				anime.classList.add("invisible");
			}else{
				anime.classList.remove("invisible");
			}
		}
	}else{
		for (var i = 0; i < animes.length; i++){
			var anime = animes[i];
			anime.classList.remove("invisible");
		}
	}
});
