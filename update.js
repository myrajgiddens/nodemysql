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
	
// Update Record

	//var sql = "UPDATE categories SET topic = 'Bars' WHERE id = 5 ";
	var sql = "SELECT * FROM categories";
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log(result);
	});
});