const user = require("../models/user");

//get all data
exports.get = async (req, res) => {
  try {
    const Users = await user.find();
    res.json(Users);
  } catch (err) {
    res.json({ message: err });
  }
};

//find a data
exports.find = async (req, res) => {
  try {
    const User = await user.findById(req.params.id);
    res.json(User);
  } catch (err) {
    res.json({ message: err });
  }
};

//add a data
exports.add = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data tidak boleh kosong" });
  }
  const { id, name, password } = req.body;

  const User = new user({
    id,
    name,
    password,
  });

  console.log(id, name, password);

  try {
    await User.save();
    // res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};

//update a data
exports.update = async (req, res) => {
  await user
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
    await user.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};
