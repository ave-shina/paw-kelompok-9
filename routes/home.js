const express = require("express");
const router = express.Router();
const perusahaan = require("../models/Perusahaan");

// Route to read
router.get("/", (req, res, next) => {
  perusahaan
    .find((err, docs) => {
      res.render("home", { perusahaans: docs });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Route to add data
router.post("/add", (req, res, next) => {
  //Requesting datas from page
  const [nama, umur, pegawai] = req.body;

  console.log(nama, umur, pegawai);

  // Saving datas to mongoDB
  const Perusahaan = new perusahaan({
    nama,
    umur,
    pegawai,
  });

  Perusahaan.save((err) => {
    if (err) console.log("Something went wrong", err);
    else {
      console.log("Data saved successfully");
      res.redirect("/");
    }
  });
});

module.exports = router;
