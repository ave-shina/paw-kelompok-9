const express = require("express");
const homeRoute = require("./routes/home");

const app = express();

const port = 3000;

//Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routing
app.use("/", homeRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
