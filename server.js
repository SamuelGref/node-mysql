const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = express();

app.use(bodyParser.json());

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

const port = 3001;

app.listen(port, () => {
  console.log(`App running on prot ${port}....`);
});
