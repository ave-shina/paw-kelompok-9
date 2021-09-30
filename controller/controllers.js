const perusahaan = require("../models/Perusahaan");

exports.get = async (req, res) => {
  try {
    const Perusahaans = await perusahaan.find();
    res.json(Perusahaans);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.find = async (req, res) => {
  try {
    const Perusahaan = await perusahaan.findById(req.params.id);
    res.json(Perusahaan);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.post = async (req, res) => {
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
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};

exports.update = async (req, res) => {
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
};

exports.delete = async (req, res) => {
  try {
    const deteledPerusahaan = await perusahaan.remove({ _id: req.params.id });
    res.json(deteledPerusahaan);
  } catch (err) {
    res.json({ message: err });
  }
};
