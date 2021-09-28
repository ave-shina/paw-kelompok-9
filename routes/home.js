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
  const { nama, umur, pegawai } = req.body;

  console.log(nama, umur, pegawai);

  const Perusahaan = new perusahaan({
    nama,
    umur,
    pegawai,
  });

  // Saving datas to mongoDB
  Perusahaan.save((err) => {
    if (err) console.log("Something went wrong", err);
    else {
      console.log("Data saved successfully");
      res.redirect("/");
    }
  });
});

// Getting edited datas
router.get("/edit/:id", (req, res, next) => {
  console.log(req.params.id);
  perusahaan.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, docs) => {
      console.log(docs);

      console.log(docs.nama);

      res.render("edit", { perusahaan: docs });
    }
  );
});

// Post edited data to page
router.post("/edit/:id", (req, res, next) => {
  perusahaan.findByIdAndUpdate({ _id: req.params.id }, req.body, (err) => {
    if (err) {
      console.log("Something went wrong", err);
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

// Deleting a perusahaan
router.get("/delete/:id", (req, res, next) => {
  perusahaan.findByIdAndDelete({ _id: req.params.id }, (err, docs) => {
    if (err) {
      console.log("Something went wrong", err);
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
