const express = require("express");
const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("Express router is working");
// });

router.get("/", (req, res, next) => {
  res.render("home");
});

module.exports = router;
