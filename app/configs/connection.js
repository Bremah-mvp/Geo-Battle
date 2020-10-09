//const Connection = require("mysql2/typings/mysql/lib/Connection");
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
const mysql = require("mysql");
let connection;


// Dependencies
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  
} else {
  connection = mysql.createConnection({
    host: "localhost",
  
    user: "root",
    password: "Bremen12345$",
    database: "battler_db"
  }) 
}
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize("battler_db", "root", "", {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   dialect: "mysql",
//   database: "geo_battle",
//   password: "Bremen12345$",
//   database: "battler_db",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
//

// Exports the connection for other files to use
connection.connect();
module.exports = connection;
