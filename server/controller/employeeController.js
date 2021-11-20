const employee = require("../models/user");

//get all data
exports.get = async (req, res) => {
  try {
    const Employees = await employee.find();
    res.json(Employees);
  } catch (err) {
    res.json({ message: err });
  }
};

//find a data
exports.find = async (req, res) => {
  try {
    const Employee = await employee.findById(req.params.id);
    res.json(Employee);
  } catch (err) {
    res.json({ message: err });
  }
};

//add a data
exports.add = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data tidak boleh kosong" });
  }
  const { id, nama, position, points, active } = req.body;

  const Employee = new employee({
    id,
    nama,
    position,
    points,
    active,
  });

  console.log(id, nama, position, points, active);
  try {
    await Employee.save();
    // res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};

//update a data
exports.update = async (req, res) => {
  await employee
    .findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      req.body
    )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${req.params.id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

//delete a data
exports.delete = async (req, res) => {
  try {
    await employee.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};
