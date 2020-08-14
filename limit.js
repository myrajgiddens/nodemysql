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
	
// Limit the results

	var sql = "SELECT * FROM categories ORDER BY id DESC LIMIT 2";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
});