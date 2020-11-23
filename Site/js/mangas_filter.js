var inner_search_bar = document.querySelector(".inner_search_bar");

inner_search_bar.addEventListener("input", function(){
	var mangas = document.querySelectorAll(".manga");
	if (this.value.length > 0){
		for (var i = 0; i < mangas.length; i++){
			var manga = mangas[i];
			var name = manga.querySelector(".manga_title");
			name = name.textContent;
			var expressao = new RegExp(this.value, "i");
			if (!expressao.test(name)){
				manga.classList.add("invisible");
			}else{
				manga.classList.remove("invisible");
			}
		}
	}else{
		for (var i = 0; i < mangas.length; i++){
			var manga = mangas[i];
			manga.classList.remove("invisible");
		}
	}
});
