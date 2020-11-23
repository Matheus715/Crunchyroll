function get_animes(){
	var xhr = new XMLHttpRequest();
	var animes_array;
	var resposta;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			animes_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/animes.jsp", false);

	xhr.send();

	return animes_array;
};

function get_episodes(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var episodes_array;

	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			episodes_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/episodes.jsp", false);

	xhr.send();

	return episodes_array;
};

function get_seasons(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var seasons_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			seasons_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/season.jsp", false);

	xhr.send();

	return seasons_array;
};

function get_mangas(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var mangas_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			mangas_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/mangas.jsp", false);

	xhr.send();

	return mangas_array;
};

function get_volumes(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var volumes_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			volumes_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/volumes.jsp", false);

	xhr.send();

	return volumes_array;
};

function get_users(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var users_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			users_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/users.jsp", false);

	xhr.send();

	return users_array;
};

function get_logged_user(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var user;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			user = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/logged_user.jsp", false);

	xhr.send();

	return user;
};

function get_lists(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var list_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			list_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/list.jsp", false);

	xhr.send();

	return list_array;
};

function get_news(){
	var xhr = new XMLHttpRequest();
	var resposta;
	var news_array;

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			resposta = xhr.response;
			news_array = JSON.parse(resposta);
		}
	};

	xhr.open("GET", "http://localhost:8080/Crunchyroll/Site/jsp/news.jsp", false);

	xhr.send();

	return news_array;
};
