var news = get_news();
var grid = document.querySelector(".grid");
var button = document.querySelector(".button");

function news_content(){
	for(var i = 0; i < 4; i++){
		var article = document.createElement("div");
		var banner = document.createElement("img");
		var a_article = document.createElement("a");
		var title = document.createElement("h1");
		var sub_title = document.createElement("h2");
	
		article.classList.add("article");
		banner.src = news[i].path + "/" + news[i].cod_article + "/banner.png";
		a_article.href = news[i].path + "/" + news[i].cod_article + ".html"
		console.log(news[i].title);
		title.innerHTML = news[i].title;
		sub_title.textContent = news[i].sub_title;
	
		grid.appendChild(article);
		article.appendChild(banner);
		article.appendChild(a_article);
		article.appendChild(sub_title);
		a_article.appendChild(title);
	}
}

button.addEventListener("click", function(){
	for(var i = 4; i < 8; i++){
		var article = document.createElement("div");
		var banner = document.createElement("img");
		var a_article = document.createElement("a");
		var title = document.createElement("h1");
		var sub_title = document.createElement("h2");
	
		article.classList.add("article");
		banner.src = news[i].path + "/" + news[i].cod_article + "/banner.png";
		a_article.href = news[i].path + "/" + news[i].cod_article + ".html"
		console.log(news[i].title);
		title.innerHTML = news[i].title;
		sub_title.textContent = news[i].sub_title;
	
		grid.appendChild(article);
		article.appendChild(banner);
		article.appendChild(a_article);
		article.appendChild(sub_title);
		a_article.appendChild(title);
	}
});