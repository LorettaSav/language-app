require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "languageapp",
  multipleStatements: true
});

//  

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql = "DROP TABLE if exists adjectives; CREATE TABLE adjectives(id INT NOT NULL AUTO_INCREMENT, adjective VARCHAR(255), meaning1 VARCHAR(255), meaning2 VARCHAR(255), meaning3 VARCHAR(255), example1 VARCHAR(255), example2 VARCHAR(255), example3 VARCHAR(255), PRIMARY KEY (id));"
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table creation `adjectives` was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql = "DROP TABLE if exists verbs; CREATE TABLE verbs(id INT NOT NULL AUTO_INCREMENT, verb VARCHAR(255), meaning1 VARCHAR(255), meaning2 VARCHAR(255), meaning3 VARCHAR(255),  cases VARCHAR(255), preposition VARCHAR(255), example1 VARCHAR(255), example2 VARCHAR(255), example3 VARCHAR(255), PRIMARY KEY (id));";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table creation `verbs` was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql = "DROP TABLE if exists expressions; CREATE TABLE expressions(id INT NOT NULL AUTO_INCREMENT, expression VARCHAR(255), meaning1 VARCHAR(255), meaning2 VARCHAR(255), meaning3 VARCHAR(255), example1 VARCHAR(255), example2 VARCHAR(255), example3 VARCHAR(255), PRIMARY KEY (id));";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table creation `expressions` was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });
