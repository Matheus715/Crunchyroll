var option = document.querySelector(".option");

var season = catch_season(option);
season_filter(season);

option.addEventListener("change", function(){

    var season = catch_season(option);

    season_filter(season);
});

function catch_season(option){
    option = option.value;
    option = option.split(" ", 1);
    option = option.toString();
    return option;
};

function season_filter(season){

    var episodes = document.querySelectorAll(".episode");
    var season_episodes = document.querySelectorAll("." + season);

    for(var i = 0; i < episodes.length; i++){
        episodes[i].classList.remove("fade_out");
    };

    for(var i = 0; i < episodes.length; i++){
        episodes[i].classList.add("fade_out");
    };

    for(var i = 0; i < season_episodes.length; i++){
        season_episodes[i].classList.remove("fade_out");
    };
};