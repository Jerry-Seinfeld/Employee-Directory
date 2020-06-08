var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "qf5dic2wzyjf1x5x.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "guzuq8x5txm48e9a",
    password: "mrrd3fem32pepkx3",
    database: "dino"
  });
}

connection.connect();
 
module.exports = connection;