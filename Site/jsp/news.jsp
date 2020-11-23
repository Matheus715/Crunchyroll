<%@page language="java" import="java.sql.*" %>

<%

	response.setHeader("Access-Control-Allow-Origin","*");

	String usuario = "root" ;
	String senha   = ""  ;
	String banco   = "crunchyroll" ;

	String url     = "jdbc:mysql://localhost:3306/" + banco ;
	String driver  = "com.mysql.jdbc.Driver"  ;

	Class.forName( driver ) ;

	Connection conexao ;

	conexao = DriverManager.getConnection( url, usuario , senha ) ;

	String sql = "SELECT * from news" ;

	Statement stm = conexao.createStatement() ;

	String sql_quant = "SELECT COUNT(Cod_article)'quantity' FROM news";
	ResultSet quant = stm.executeQuery(sql_quant);

	int num = 0;

	while(quant.next()){
		num = Integer.parseInt(quant.getString("quantity"));
	}

	ResultSet dados = stm.executeQuery( sql ) ;

	int cont = 1;

	out.print("[");

	while ( dados.next() ) {
		out.print("{");

		out.print("\"cod_article\": ");
		out.print(  dados.getString("Cod_article") ) ;
		out.print(",");

		out.print("\"title\": \"");
		out.print(  dados.getString("Title") ) ;
		out.print("\",");

		out.print("\"sub_title\": \"");
		out.print(  dados.getString("Sub_title") ) ;
		out.print("\",");

		out.print("\"path\": \"");
		out.print(  dados.getString("Path") ) ;
		out.print("\",");

		out.print("\"author\": ");
		out.print(  dados.getString("Author") ) ;
		out.print(",");

		out.print("\"release_date\": \"");
		out.print(  dados.getString("Release_date") ) ;
		out.print("\",");

		out.print("\"release_hour\": \"");
		out.print(  dados.getString("Release_hour") ) ;
		out.print("\"");

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