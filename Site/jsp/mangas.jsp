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

	String sql = "SELECT * from mangas" ;

	Statement stm = conexao.createStatement() ;

	String sql_quant = "SELECT COUNT(Cod_manga)'quantity' FROM mangas";
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

		out.print("\"cod_manga\": ");
		out.print(  dados.getString("Cod_manga") ) ;
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