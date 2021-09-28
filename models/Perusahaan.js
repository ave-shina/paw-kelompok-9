const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PerusahaanSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
    required: true,
  },
  pegawai: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("perusahaan", PerusahaanSchema);
