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
			String signin_username  = request.getParameter("signin_username");
			String signin_email  = request.getParameter("signin_email");
			String signin_password  = request.getParameter("signin_password");
			String path = "http://localhost:8080/Crunchyroll/Usuários/" + signin_username;
			int logged = 0;
			int mode = 0;

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
			String new_user = "INSERT INTO users(Username, Email, User_password, Logged, Screen_mode, Path) VALUES ('" + signin_username + "', '" + signin_email + "', '" + signin_password + "', " + logged + ", " + mode + ", '" + path + "');";
		
			// cria o statement 
			// ele é o responsável por executar o comando do SQL
			Statement stm = conexao.createStatement() ;
		
			// executa o comando do SQL
		
			stm.executeUpdate( new_user ) ;
		
			stm.close() ;
			conexao.close() ;
			out.print("<p class='trigger'>Foi</p>");
		
		%>
		<script>
			var trigger = document.querySelector(".trigger");
			if(trigger != ""){
				window.location.replace("http://localhost:8080/Crunchyroll/Site/p%C3%A1ginas/login_page.html");
			}
		</script>

	</body>
</html>




