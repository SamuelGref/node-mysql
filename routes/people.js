const express = require("express");
const mysqlConnection = require("../connection");

const Router = express.Router();

Router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * from people", (err, row, fields) => {
    if (!err) {
      res.send(row);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
