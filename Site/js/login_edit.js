var user = get_logged_user();
var a_logo = document.querySelector(".a_logo");

if(user != ""){
	var user_info = document.createElement("p");
	var main = document.querySelector("main");

	user_info.classList.add("database_info");
	user_info.classList.add("cod_user");
	user_info.textContent = user[0].user_code;

	main.appendChild(user_info);

	a_logo.href = user[0].path + "/user_page.html";
}
