var like = document.querySelector(".like");
var dislike = document.querySelector(".dislike");

like.addEventListener("click", function(){
	like.classList.toggle("chosen");
	dislike.classList.toggle("not_chosen");
})

dislike.addEventListener("click", function(){
	dislike.classList.toggle("chosen");
	like.classList.toggle("not_chosen");
})
