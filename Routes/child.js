const express = require("express");
const router = express.Router();
const { body, query, param, validationResult } = require("express-validator");
const controller = require("./../Controller/child");
const validator = require("./../Middleware/errorValidation");

router
  .route("/child")
  .get(controller.getAllChilds)
  .post(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 15 })
        .withMessage("length of name should be > 3 & < 15"),
      body("age")
        .isInt({
          min: 5,
          max: 15,
        })
        .withMessage("Child age should be > 5 and < 15"),
      body("level")
        .isIn(["PreKG", "KG1", "KG2"])
        .withMessage("Child level should be PreKG or KG1 or KG2"),
      body("address").isObject().withMessage("Please Enter valid address"),
    ],
    validator,
    controller.addChild
  )
  .patch(
    [
      body("id").isInt().withMessage("ID should be number"),
      body("name")
        .isString()
        .withMessage("Name should be string")
        .isLength({ min: 3, max: 15 })
        .withMessage("length of name should be > 3 & < 15"),
      body("age")
        .isInt({
          min: 5,
          max: 15,
        })
        .withMessage("Child age should be > 5 and < 15"),
      body("level")
        .isIn(["PreKG", "KG1", "KG2"])
        .withMessage("Child level should be PreKG or KG1 or KG2"),
      body("address").isObject().withMessage("Please Enter valid address"),
    ],
    validator,
    controller.updateChild
  );

router
  .route("/child/:id")
  .get(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.getChild
  ).delete(
    param("id").isInt().withMessage("ID should be integer"),
    validator,
    controller.deleteChild
  );

module.exports = router;
