const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

const perusahaanRoute = require("./routes/perusahaan");
const services = require("./services/render");

const app = express();

const port = 3000;
mongoose.connect(process.env.DB_CONNECTION, (err) => {
  err
    ? console.log("Error when connecting to MongoDB:", err)
    : console.log("MongoDB connected successfully");
});

// const db = mongoose.connection;
// db.on("error", (err) => {
//   console.log("Error when connecting to MongoDB:", err);
// });
// db.once("open", () => {
//   console.log("MongoDB connected successfully");
// });

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
//Perusahaan
app.use("/perusahaans", perusahaanRoute);

app.get("/", services.homeRoutes);

app.get("/edit", services.editRoutes);

app.listen(port, () => {
  console.log(`The App is running on http://localhost:${port}`);
});
