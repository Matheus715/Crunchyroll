var add = document.querySelector(".add");
var remove = document.querySelector(".remove");

add.addEventListener("click", function(){
	this.classList.add("invisible");
	remove.classList.remove("invisible");
});

remove.addEventListener("click", function(){
	this.classList.add("invisible");
	add.classList.remove("invisible");
});