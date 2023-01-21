const express = require("express");
const router = express.Router();
const { body, query, param, validationResult } = require("express-validator");
const controller = require("./../Controller/class");
const validator = require("./../Middleware/errorValidation");

router
  .route("/class")
  .get(controller.getAllClasses)
  .post(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 20 })
        .withMessage("length of name should be > 3 & < 20"),
      body("supervisor").isInt().withMessage("Supervisor ID should be integer"),
      body("childs")
        .isArray({ min: 10, max: 50 })
        .withMessage("At least ten and maximum 50 students in the class"),
    ],
    validator,
    controller.addClass
  )
  .patch(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 20 })
        .withMessage("length of name should be > 3 & < 20"),
      body("supervisor").isInt().withMessage("ID should be integer"),
      body("childs")
        .isArray({ min: 10, max: 50 })
        .withMessage(
          "class should have at least ten student and max 50 students"
        ),
    ],
    validator,
    controller.updateClass
  );

router
  .route("/class/:id")
  .get(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.getClass
  )
  .delete(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.deleteClass
  );

// router.get("/classTeacher/:id", controller.getTeacherClass);

module.exports = router;
