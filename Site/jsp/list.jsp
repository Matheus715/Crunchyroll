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

	String sql = "SELECT * from list_recorder" ;

	Statement stm = conexao.createStatement() ;

	String sql_quant = "SELECT COUNT(Record)'quantity' FROM list_recorder";
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

		out.print("\"record\": ");
		out.print(  dados.getString("Record") ) ;
		out.print(",");

		out.print("\"anime\": ");
		out.print(  dados.getString("Anime") ) ;
		out.print(",");

		out.print("\"cod_user\": ");
		out.print(  dados.getString("Cod_user") ) ;

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