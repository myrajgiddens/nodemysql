var mysql = require('mysql');

//create a connection

var connection = mysql.createConnection({
	host: "localhost", 
	user: "root", 
	password: "",
	database: "nodedb",

});


//connect to mySQL

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected to the Database!");
	

	// order by 

	var sql = "SELECT * FROM categories ORDER BY topic DESC";
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});