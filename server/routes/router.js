const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const employeeController = require("../controller/employeeController");

// user API
router.get("/api/users/", userController.get);
router.post("/api/users/", userController.add);
router.get("/api/users/:id", userController.find);
router.put("/api/users/:id", userController.update);
router.delete("/api/users/:id", userController.delete);

// employee API
// router.get("/api/employees/", employeeController.get);
// router.post("/api/employees/", employeeController.add);
// router.get("/api/employees/:id", employeeController.find);
// router.put("/api/employees/:id", employeeController.update);
// router.delete("/api/employees/:id", employeeController.delete);

module.exports = router;
