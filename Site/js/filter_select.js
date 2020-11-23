var filters = document.querySelectorAll(".filter");
var selected = document.querySelector(".selected");
fade_out();
unfade_out(selected.textContent);


for(var i = 0; i < filters.length; i++){
	filters[i].addEventListener("click", function(){
		for(var j = 0; j< filters.length; j++){
			filters[j].classList.remove("selected");
			fade_out();
		}
		this.classList.add("selected");
		unfade_out(this.textContent);
	});
};