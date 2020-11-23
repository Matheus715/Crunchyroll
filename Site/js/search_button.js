var search_icon = document.querySelector(".search_icon");
var hide_search_icon = document.querySelector(".hide_search_icon");
var search_input = document.querySelector(".search_input");

search_icon.addEventListener('click', function(){
	var header = document.querySelector(".full_header");
	if(header == null){
		search_icon.classList.remove("search_icon");
		hide_search_icon.classList.remove("hide_search_icon");
		search_input.classList.remove("search_input");
	
		search_icon.classList.add("clicked_search_icon");
		hide_search_icon.classList.add("clicked_hide_search_icon");
		search_input.classList.add("clicked_search_input");
	};
});

hide_search_icon.addEventListener('click', function(){
	var header = document.querySelector(".full_header");
	if(header == null){
		search_icon.classList.remove("clicked_search_icon");
		hide_search_icon.classList.remove("clicked_hide_search_icon");
		search_input.classList.remove("clicked_search_input");

		search_icon.classList.add("search_icon");
		hide_search_icon.classList.add("hide_search_icon");
		search_input.classList.add("search_input");
	};
});