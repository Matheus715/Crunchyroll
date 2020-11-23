var animes = get_animes();

var dice = document.querySelector(".dice");
var num = Math.floor(Math.random() * animes.length);
dice.href = animes[num].path + "/anime_page.html";