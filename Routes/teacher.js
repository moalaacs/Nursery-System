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
      body("id").isObject().withMessage("ID should be number"),
      body("name").isString().withMessage("Name should be string"),
      body("password").isStrongPassword().withMessage("Weak password"),
      body("email").isEmail().withMessage("Not valid email"),
      body("image").isURL().withMessage("Not valid image"),
    ],
    validator,
    controller.addTeacher
  )
  .patch(
    [
      body("id").isObject().withMessage("Id should object id mongodb"),
      body("name").isString().withMessage("full name should string")
        .isLength({ min: 5, max: 15 }).withMessage("length of name > 5 & < 15"),
      body("password").isLength({ min: 8 }).withMessage("length must be >= 8"),
      body("email").isEmail().withMessage("Invalid email"),
      body("image").isString().withMessage("image name must be string")
    ]
    ,
    validator,
    controller.updateTeacher
  )
// router.route("/teachers/:id")
//   .get(
//     param("id").isInt().withMessage("id should be integer"),
//     validator,
//     controller.show)
//   .delete(param("id").isInt().withMessage("id should be integer"),
//     validator,
//     controller.destroy);

.delete(controller.deleteTeacher);

module.exports = router;
