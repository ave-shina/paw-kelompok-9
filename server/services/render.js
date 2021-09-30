const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/companies")
    .then(function (response) {
      res.render("index", { perusahaans: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update = (req, res) => {
  axios
    .get("http://localhost:3000/api/companies", {
      params: { id: req.query.id },
    })
    .then(function (comData) {
      res.render("update", { perusahaan: comData.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
