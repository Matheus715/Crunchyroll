
function fade_out(){
	var content = document.querySelectorAll(".content");
	for(var i = 0; i < content.length; i++){
		content[i].classList.add("invisible");
	};
};

function unfade_out(argument){
	argument = argument.toLowerCase();
	contents = document.querySelectorAll("." + argument);
	for(var j = 0; j < contents.length; j++){
		contents[j].classList.remove("invisible")
	}
}
