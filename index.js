const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const keys = require("./config/key");
const perusahaan = require("./models/Perusahaan");

const homeRoute = require("./routes/home");

const app = express();

const port = 3000;
mongoose.connect(keys.mongoURI);

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Error when connecting to MongoDB:", err);
});
db.once("open", () => {
  console.log("MongoDB connected successfully");
});

//Middleware
// viewengine setup
app.set("view engine", "ejs");
//static folder root setup
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routing
app.use("/", homeRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
