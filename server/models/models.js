const mongoose = require("mongoose");

let EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  active: { type: Boolean, required: true },
});

module.exports = mongoose.model("employee", EmployeeSchema);
