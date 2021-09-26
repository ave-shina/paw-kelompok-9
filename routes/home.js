const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Express router is working");
});

module.exports = router;
