var body = document.querySelector(".day");
var mode = document.querySelector(".mode");
var logo = document.querySelector(".logo");
var inner_search_icon = document.querySelector(".inner_search_icon");
var rodape = document.querySelector(".footer");

var cont1 = 0;

mode.addEventListener('change', function(){
    if (cont1 <=0){
        body.classList.add("night");
        body.classList.remove("day");
        logo.src = "../img/logos/logo.png";

        if(rodape != null){
            var news = document.querySelector(".news");
            var forum = document.querySelector(".forum");
            news.src = "../img/icones/noticias-orange.png";
            forum.src = "../img/icones/forum-orange.png";
        }

        if(inner_search_icon != null){
            inner_search_icon.src = "../img/icones/pesquisa-branco.png";
        }

        cont1 = 1;
    }else{
        body.classList.remove("night");
        body.classList.add("day");
        logo.src = "../img/logos/logo-branco.png";

        if(rodape != null){
            var news = document.querySelector(".news");
            var forum = document.querySelector(".forum");
            news.src = "../img/icones/noticias.png";
            forum.src = "../img/icones/forum.png";
        }

        if(inner_search_icon != null){
            inner_search_icon.src = "../img/icones/pesquisa.png";
        }

        cont1 = 0;
    }
})
