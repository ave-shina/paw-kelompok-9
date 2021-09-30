const express = require("express");
const router = express.Router();
const perusahaan = require("../models/Perusahaan");

// Get all data
router.get("/", async (req, res) => {
  try {
    const Perusahaans = await perusahaan.find();
    res.json(Perusahaans);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a single data
router.get("/:id", async (req, res) => {
  try {
    const Perusahaan = await perusahaan.findById(req.params.id);
    res.json(Perusahaan);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add a data
router.post("/add", async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data tidak boleh kosong" });
  }
  const { nama, umur, pegawai } = req.body;

  const Perusahaan = new perusahaan({
    nama,
    umur,
    pegawai,
  });

  console.log(nama, umur, pegawai);

  try {
    const savedPerusahaan = await Perusahaan.save();
    res.json(savedPerusahaan);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a data
router.patch("/:id", async (req, res) => {
  try {
    const updatedPerusahaan = await perusahaan.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    res.json(updatedPerusahaan);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post edited data to page
// router.post("/:id", async (req, res, next) => {
//   perusahaan.findByIdAndUpdate({ _id: req.params.id }, req.body, (err) => {
//     if (err) {
//       console.log("Something went wrong", err);
//       next(err);
//     } else {
//       res.redirect("/");
//     }
//   });
// });

// Delete a data
router.delete("/:id", async (req, res) => {
  try {
    const deteledPerusahaan = await perusahaan.remove({ _id: req.params.id });
    res.json(deteledPerusahaan);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
