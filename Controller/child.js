const { response, json, request } = require("express");
const mongoose = require("mongoose");
require("./../Model/child");
const childSchema = mongoose.model("child");

exports.getAllChilds = (request, response, next) => {
  childSchema
    .find()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.getChild = (request, response, next) => {
  childSchema
    .findById(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.addChild = (request, response, next) => {
  let newChild = new childSchema({
    _id: request.body.id,
    name: request.body.name,
    age: request.body.age,
    level: request.body.level,
    address: request.body.address,
  });
  newChild
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.updateChild = (request, response, next) => {
  childSchema
    .updateOne(
      {
        _id: request.body.id,
      },
      {
        $set: {
          name: request.body.name,
          age: request.body.age,
          level: request.body.level,
          address: request.body.address,
        },
      }
    )
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.deleteChild = (request, response, next) => {
  childSchema
    .findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};
