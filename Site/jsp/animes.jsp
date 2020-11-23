<%@page language="java" import="java.sql.*" %>

<%

	response.setHeader("Access-Control-Allow-Origin","*");
	response.setHeader("Referer","*");

	String usuario = "root" ;
	String senha   = ""  ;
	String banco   = "crunchyroll" ;

	String url     = "jdbc:mysql://localhost:3306/" + banco ;
	String driver  = "com.mysql.jdbc.Driver"  ;

	Class.forName( driver ) ;

	Connection conexao ;

	conexao = DriverManager.getConnection( url, usuario , senha ) ;

	Statement stm = conexao.createStatement() ;

	String sql = "SELECT * from animes" ;
	String sql_quant = "SELECT COUNT(Cod_anime)'quantity' FROM animes";

	ResultSet quant = stm.executeQuery( sql_quant);

	int num = 0;

	while(quant.next()){
		num = Integer.parseInt(quant.getString("quantity"));
	}

	ResultSet dados = stm.executeQuery( sql ) ;

	out.print("[");

	int cont = 1;

	while ( dados.next() ) {
		out.print("{");

		out.print("\"cod_anime\": ");
		out.print(  dados.getString("Cod_anime") ) ;
		out.print(",");

		out.print("\"name\": \"");
		out.print(  dados.getString("Name") ) ;
		out.print("\",");

		out.print("\"synopsis\": \"");
		out.print(  dados.getString("Synopsis") ) ;
		out.print("\",");

		out.print("\"path\": \"");
		out.print(  dados.getString("Path") ) ;
		out.print("\",");

		out.print("\"path_server\": \"");
		out.print(  dados.getString("Path_server") ) ;
		out.print("\",");

		out.print("\"class_1\": \"");
		out.print(  dados.getString("Class_1") ) ;
		out.print("\",");

		out.print("\"class_2\": \"");
		out.print(  dados.getString("Class_2") ) ;
		out.print("\",");

		out.print("\"class_3\": \"");
		out.print(  dados.getString("Class_3") ) ;
		out.print("\",");

		out.print("\"class_4\": \"");
		out.print(  dados.getString("Class_4") ) ;
		out.print("\",");

		out.print("\"release_date\": \"");
		out.print(  dados.getString("Release_date") ) ;
		out.print("\",");

		out.print("\"release_hour\": \"");
		out.print(  dados.getString("Release_hour") ) ;
		out.print("\",");

		out.print("\"releasing_status\": ");
		out.print(  dados.getString("Releasing_status") ) ;
		out.print(",");

		out.print("\"highlight\": ");
		out.print(  dados.getString("Highlight") ) ;
		out.print(",");

		out.print("\"times_visited\": ");
		out.print(  dados.getString("Times_visited") ) ;

		if(cont < num){
			out.print("},");
		}else{
			out.print("}");
		}
		cont = cont + 1;
	}
	out.print("]");

	stm.close() ;
	conexao.close() ;

%>