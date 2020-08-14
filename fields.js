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
	
	// fields

	var sql = "SELECT * FROM categories";
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(fields[0].name);
		console.log("--------------------");
		console.log(result[0].topic);
	});
});