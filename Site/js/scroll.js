var target = document.querySelector(".full_header");
var header = document.querySelector("header");
var body = document.querySelector("body");

var mode = document.querySelector(".mode");
var search_icon = document.querySelector(".search_icon");
var hide_search_icon = document.querySelector(".hide_search_icon");

var cabecalho_content = document.querySelector(".cabecalho_content");
var search_bar = document.querySelector(".search_input");
var div_search_bar = document.querySelector(".search_bar");

var avatar = document.querySelector(".a_avatar");
var header_list = document.querySelector(".header_list");

window.addEventListener('scroll', function() {
	const windowTop = window.pageYOffset;
	if((windowTop) > (window.innerHeight * 0.2)){

		target.classList.add("short_header");
		target.classList.remove("full_header");
		body.classList.add("short");
		body.classList.remove("full");
		cabecalho_content.classList.add("invisible");

		header.appendChild(avatar);
		header.appendChild(header_list);
		header.appendChild(mode);
		header.appendChild(search_icon);
		header.appendChild(hide_search_icon);
		header.appendChild(search_bar);

	}else{
		target.classList.add("full_header");
		target.classList.remove("short_header");
		body.classList.add("full");
		body.classList.remove("short");
		cabecalho_content.classList.remove("invisible");

		header.appendChild(search_bar);
		cabecalho_content.appendChild(avatar);
		cabecalho_content.appendChild(mode);
		div_search_bar.appendChild(search_bar);
		div_search_bar.appendChild(search_icon);
		div_search_bar.appendChild(hide_search_icon);

		search_icon.classList.remove("clicked_search_icon");
		hide_search_icon.classList.remove("clicked_hide_search_icon");
		search_input.classList.remove("clicked_search_input");

		search_icon.classList.add("search_icon");
		hide_search_icon.classList.add("hide_search_icon");
		search_input.classList.add("search_input");

	}
});
