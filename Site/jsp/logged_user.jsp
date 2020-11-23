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

	String sql = "SELECT * from users WHERE Logged = 1" ;

	Statement stm = conexao.createStatement() ;

	String sql_quant = "SELECT COUNT(User_code)'quantity' FROM users WHERE Logged = 1";
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

		out.print("\"user_code\": ");
		out.print(  dados.getString("User_code") ) ;
		out.print(",");

		out.print("\"username\": \"");
		out.print(  dados.getString("Username") ) ;
		out.print("\",");

		out.print("\"email\": \"");
		out.print(  dados.getString("Email") ) ;
		out.print("\",");

		out.print("\"user_password\": \"");
		out.print(  dados.getString("User_password") ) ;
		out.print("\",");

		out.print("\"logged\": ");
		out.print(  dados.getString("Logged") ) ;
		out.print(",");

		out.print("\"screen_mode\": ");
		out.print(  dados.getString("Screen_mode") ) ;
		out.print(",");

		out.print("\"path\": \"");
		out.print(  dados.getString("Path") ) ;
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