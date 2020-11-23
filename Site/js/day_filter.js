var input = document.getElementsByName("days");
var anime = document.querySelectorAll(".anime");
var labels = document.querySelectorAll(".week_day");

for(var k = 0; k < input.length; k++){
    input[k].addEventListener("change", function(){
        add_fadeOut(anime);
        var day = this.value;
        remove_fadeOut(day);
    })
}

for(var l = 0; l < labels.length; l++){
    labels[l].addEventListener("click", function(){
        for(var m = 0; m < labels.length; m++){
            labels[m].classList.remove("clicked");
        }
        this.classList.add("clicked");
    })
};

function add_fadeOut(anime){
    for(var i = 0; i < anime.length; i++){
        anime[i].classList.add("fade_out")
    }
};

function remove_fadeOut(day){
    var selection = document.querySelectorAll("."+day);
    for(var j = 0; j < selection.length; j++){
        selection[j].classList.remove("fade_out");
    }
};
