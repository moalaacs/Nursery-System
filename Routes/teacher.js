const express = require("express");
const router = express.Router();
const { body, query, param, validationResult } = require("express-validator");
const controller = require("./../Controller/teacher");
const validator = require("./../Middleware/errorValidation");

router
  .route("/teacher")
  .get(controller.getAllTeachers)
  .post(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 15 })
        .withMessage("length of name should be > 3 & < 15"),
      body("password").isStrongPassword().withMessage("Weak password"),
      body("email").isEmail().withMessage("Not valid email"),
      body("image").isString().withMessage("Not valid image"),
    ],
    validator,
    controller.addTeacher
  )
  .patch(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 15 })
        .withMessage("length of name should be > 3 & < 15"),
      body("password").isStrongPassword().withMessage("Weak password"),
      body("email").isEmail().withMessage("Not valid email"),
      body("image").isString().withMessage("Not valid image"),
    ],
    validator,
    controller.updateTeacher
  );

router
  .route("/teacher/:id")
  .get(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.getTeacher
  )
  .delete(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.deleteTeacher
  );

module.exports = router;
