var mysql = require('mysql');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection({
    host:       'cwolf.cs.sonoma.edu',
    user:       'krangel',
    password:   '3114181'
});

// create the ExampleDB if it does not exist.                                            
var dbToUse = 'krangel'
var createDatabaseQry = 'CREATE DATABASE IF NOT EXISTS ' + dbToUse;
connection.query(createDatabaseQry, function (err) {
    if(err) throw err;

    var useDatabaseQry = 'USE ' + dbToUse;

    connection.query(useDatabaseQry, function(err) {
        if(err) throw err;

        var createTableQry = 'CREATE TABLE IF NOT EXISTS User('
            + 'UserID INT AUTO_INCREMENT PRIMARY KEY'
            + ',Email VARCHAR(256)'
            + ',Password VARCHAR(50)'
            + ')';
        connection.query(createTableQry, function (err) {
            if (err) throw err;
        });
    });
});

exports.GetAll = function(callback){
    connection.query('select * from patientInfo',
		  function(err, result){
		      if(err){
			  console.log(err);
			  callback(true);
			  return;
			 }
		      callback(false, result);
		  }
		 );
}

