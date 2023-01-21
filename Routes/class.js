const express = require("express");
const { body, query, param, validationResult } = require("express-validator");
const router = express.Router();
const validator = require("./../Middleware/errorValidation");
const controller = require('./../Controller/class');

router.route("/class")
  .get(controller.getAllClass)
  .post([
    body("id").isObject().withMessage("Id should be integer"),
    body("name").isAlpha().withMessage("Name should be string")
      .isLength({ max: 30 }).withMessage("length of name less Than 30"),
    body("supervisor").isInt().withMessage("Id should be integer"),
    body("children").isArray({ min: 10, max: 50 }).withMessage("class should have at least ten student and max 50 students"),
  ],
    validator, controller.addClass)
  .put(controller.updateClass)
  .delete(controller.deleteClass)

router.get("/class/:id",
  controller.getClassByID)

router.delete("/class/:id",
  validator,
  controller.deleteClassByID)

router.get("/classchildern/:id",
  controller.getClassChildren)

router.get("/classTeacher/:id",
  controller.getClassTeacher)
module.exports = router;