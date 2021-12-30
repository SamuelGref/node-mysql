const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const password = process.env.DATABASE_PASSWORD;
const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: password,
  database: "node-mysql",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("MySQL DB Connected");
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
