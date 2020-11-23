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

	String sql = "SELECT * from episodes" ;


	Statement stm = conexao.createStatement() ;

	String sql_quant = "SELECT COUNT(Cod_episode)'quantity' FROM episodes";
	ResultSet quant = stm.executeQuery( sql_quant);

	int num = 0;

	while(quant.next()){
		num = Integer.parseInt(quant.getString("quantity"));
	}

	ResultSet dados = stm.executeQuery( sql ) ;

	int cont = 1;

	out.print("[");

	while ( dados.next() ) {
		out.print("{");

		out.print("\"cod_episode\": ");
		out.print(  dados.getString("Cod_episode") ) ;
		out.print(",");

		out.print("\"name\": \"");
		out.print(  dados.getString("Name") ) ;
		out.print("\",");

		out.print("\"number\": ");
		out.print(  dados.getString("Number") ) ;
		out.print(",");

		out.print("\"synopsis\": \"");
		out.print(  dados.getString("Synopsis") ) ;
		out.print("\",");

		out.print("\"anime\": ");
		out.print(  dados.getString("Anime") ) ;
		out.print(",");

		out.print("\"path\": \"");
		out.print(  dados.getString("Path") ) ;
		out.print("\",");

		out.print("\"path_server\": \"");
		out.print(  dados.getString("Path_server") ) ;
		out.print("\",");

		out.print("\"season\": ");
		out.print(  dados.getString("Season") ) ;

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