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

	var sql = "INSERT INTO categories (topic, cost) VALUES ('Activities', 'Fee to Participate')";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Data inserted into table...");
	});

});