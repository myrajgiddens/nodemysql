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

	var sql = "SELECT * FROM categories";
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;

		var i; 
		for (i = 0; i < result.length; i++) {
			console.log(result[i].topic);
		};
		
	});
});