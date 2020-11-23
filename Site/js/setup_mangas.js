var mangas_div = document.querySelector(".mangas");
var mangas_array = get_mangas();

for(var i = 0; i < mangas_array.length; i++){
	var manga = document.createElement("li");
	var a_manga = document.createElement("a");
	var poster = document.createElement("img");
	var title = document.createElement("h1");

	manga.classList.add("manga");
	poster.classList.add("poster");
	title.classList.add("manga_title");

	a_manga.href = mangas_array[i].path + "/manga_page.html";
	poster.src =  mangas_array[i].path + "/poster.jpg";
	title.textContent = mangas_array[i].name;

	mangas_div.appendChild(manga);
	manga.appendChild(a_manga);
	a_manga.appendChild(poster);
	a_manga.appendChild(title);
}