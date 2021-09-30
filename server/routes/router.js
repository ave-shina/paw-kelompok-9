const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");
const services = require("../services/render");

router.get("/", services.homeRoutes);
router.get("/update/:id", services.update);

// API
router.get("/api/companies/", controller.get);
router.post("/api/companies/", controller.add);
router.get("/api/companies/:id", controller.find);
router.put("/api/companies/:id", controller.update);
router.delete("/api/companies/:id", controller.delete);

module.exports = router;
