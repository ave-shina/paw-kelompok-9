const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");
const base = "/api/employees/";

// employee API
router.get(base, controller.get);
router.post(base, controller.add);
router.get(`${base}:id`, controller.find);
router.put(`${base}:id`, controller.update);
router.delete(`${base}:id`, controller.delete);

module.exports = router;
