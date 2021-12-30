const express = require("express");
const bodyParser = require("body-parser");

const mysqlConnection = require("./connection");

const PeopleRoutes = require("./routes/people");

const app = express();

app.use(bodyParser.json());

app.use("/people", PeopleRoutes);

// db connect

const port = 3001;

app.listen(port, () => {
  console.log(`App running on prot ${port}....`);
});
