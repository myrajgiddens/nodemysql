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
	connection.query("CREATE DATABASE nodedb", function(err, result) {
		if (err) throw err;
		console.log("Database Created");
	});
});