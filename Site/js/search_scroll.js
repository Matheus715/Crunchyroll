var filters_element = document.querySelector(".filters");
var inner_search_icon = document.querySelector(".inner_search_icon");

window.addEventListener('scroll', function() {
	const windowTop = window.pageYOffset;
	if((windowTop) > (window.innerHeight * 0.2)){
		filters_element.classList.add("invisible");
		inner_search_icon.classList.add("inner_search_icon_fixed");
	}else{
		filters_element.classList.remove("invisible");
		inner_search_icon.classList.remove("inner_search_icon_fixed");
	}
});
