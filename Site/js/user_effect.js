var username = document.querySelector(".username");
var username = username.offsetTop;
var header_list = document.querySelector(".header_list");

window.addEventListener("scroll", function(){
	var windowTop = window.pageYOffset;
	var avatar = document.querySelector(".header_avatar");
	if(windowTop > (username-50)){
		avatar.classList.remove("not_yet");
		avatar.classList.add("now")
	}else{
		avatar.classList.remove("now");
		avatar.classList.add("not_yet")
	}
});