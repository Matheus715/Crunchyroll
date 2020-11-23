<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>

		<%@page language="java" import="java.sql.*" %>

		<%
			// cria as variaveis e obtem os dados digitados pelo usuario
			String cod_anime  = request.getParameter("anime_cod");
			String user_cod  = request.getParameter("user_cod");
		
			// variaveis para acessar o banco de dados
			String banco   = "crunchyroll";
			String usuario = "root";
			String senha   = "";
			String url     = "jdbc:mysql://localhost:3306/" + banco;
			String driver  = "com.mysql.jdbc.Driver";
		
			// carrega o driver na memoria
			Class.forName( driver );
		
			// criar variavel para conectar com banco de dados
			Connection conexao ; 
		
			// abrir a conexao com o banco 
			conexao = DriverManager.getConnection( url , usuario , senha ) ;
			String add_to_list = "INSERT INTO list_recorder(Anime, Cod_user) VALUES (" + cod_anime + ", " + user_cod + ");";
		
			// cria o statement 
			// ele é o responsável por executar o comando do SQL
			Statement stm = conexao.createStatement() ;
		
			// executa o comando do SQL
			stm.executeUpdate( add_to_list ) ;

			stm.close() ;
			conexao.close() ;
			out.print("<p class='trigger'>Foi</p>");
		
		%>
		<script>
			var trigger = document.querySelector(".trigger");
			if(trigger != ""){
				window.location.replace("http://localhost:8080/Crunchyroll/Site/p%C3%A1ginas/edit.html");
			}
		</script>

	</body>
</html>




