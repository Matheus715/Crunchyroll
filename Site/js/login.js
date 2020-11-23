var user = get_logged_user();
var avatar_link = document.querySelector(".a_avatar");
var avatar_image = document.querySelector(".avatar");

avatar_link.target = "_blank"

if(user != ""){
	avatar_link.href = user[0].path + "/user_page.html";
	avatar_image.src = user[0].path + "/avatar.jpg";

	var user_info = document.createElement("p");
	var main = document.querySelector("main");

	user_info.classList.add("database_info");
	user_info.classList.add("cod_user");
	user_info.textContent = user[0].user_code;

	main.appendChild(user_info);
}else{
	avatar_link.href = "http://localhost:8080/Crunchyroll/Site/p%C3%A1ginas/login_page.html";
}
