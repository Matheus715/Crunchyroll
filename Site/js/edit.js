var animes_array = get_animes();
var animes_div = document.querySelector(".animes");
var cod_user = document.querySelector(".cod_user");
var lists =  get_lists();

for(var i = 0; i < animes_array.length; i++){

	var form = document.createElement("form");
	var cod_anime = document.createElement("input");
	var label = document.createElement("label");
	var poster = document.createElement("img");
	var opacity = document.createElement("div");
	var check = document.createElement("img");
	var submit = document.createElement("input");
	var input_user = document.createElement("input");

	form.classList.add("anime");
	form.classList.add( "form" + animes_array[i].cod_anime)
	cod_anime.classList.add("database_info");
	opacity.classList.add("opacity");
	opacity.classList.add("anime"+animes_array[i].cod_anime);
	opacity.classList.add("on");
	submit.classList.add("database_info");
	input_user.classList.add("database_info");

	form.name = "form" + animes_array[i].cod_anime;
	form.method = "post";
	form.action = "../jsp/add_to_list.jsp";

	input_user.type = "text";
	input_user.name =  "user_cod";
	input_user.value = cod_user.textContent;

	cod_anime.type = "text";
	cod_anime.name = "anime_cod";
	cod_anime.value = animes_array[i].cod_anime;

	label.htmlFor = "submit" + animes_array[i].cod_anime;

	poster.src = animes_array[i].path_server + "/poster.jpg";
	check.src = "../img/icones/check.png";

	submit.type = "submit";
	submit.id =  "submit" + animes_array[i].cod_anime;

	animes_div.appendChild(form)

	form.appendChild(input_user);
	form.appendChild(cod_anime);
	form.appendChild(label);
	form.appendChild(submit);

	label.appendChild(poster);
	label.appendChild(opacity);

	opacity.appendChild(check);
}

var already_on_list = [];

for(var j = 0; j < lists.length; j++){
	if(lists[j].cod_user == cod_user.textContent){
		var opacity_change = document.querySelector(".anime"+lists[j].anime);
		var form_change = document.querySelector(".form"+lists[j].anime);
		opacity_change.classList.remove("on");
		opacity_change.classList.add("off");
		form_change.action = "../jsp/remove_from_list.jsp";
	}
}

