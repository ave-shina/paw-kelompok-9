const mongoose = require("mongoose");

let EmployeeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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

module.exports = mongoose.model("employee", EmployeeSchema, "employee");
