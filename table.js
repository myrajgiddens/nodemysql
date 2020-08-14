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
	
	// alter table

	var sql = "ALTER TABLE categories ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Our table has been altered...");
	})

	// create table
	//var sql = "CREATE TABLE categories (topic VARCHAR(255), cost VARCHAR(255))";
	//connection.query(sql, function (err, result) {
		//if (err) throw err;
		//console.log("Table has been created!");
	//})
});