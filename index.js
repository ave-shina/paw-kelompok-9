const express = require("express");
const mongoose = require("mongoose");
const homeRoute = require("./routes/home");

const app = express();

const port = 3000;
mongoose.connect("mongodb://localhost:27017/nodejs_crud");

const db = mongoose.connection;
db.on("error", () => {
  console.log("Something went wrong when connecting to the database");
});
db.once("open", () => {
  console.log("Database connected successfully");
});

//Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routing
app.use("/", homeRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
