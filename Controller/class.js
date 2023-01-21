const { response, json, request } = require("express");
const mongoose = require("mongoose");
require("./../Model/class");
const classSchema = mongoose.model("class");

exports.getAllClasses = (request, response, next) => {
  classSchema
    .find()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.getClass = (request, response, next) => {
  classSchema
    .findById(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.addClass = (request, response, next) => {
  let newClass = new classSchema({
    _id: request.body.id,
    name: request.body.name,
    supervisor: request.body.supervisor,
    childs: request.body.childs,
  });
  newClass
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.updateClass = (request, response, next) => {
  classSchema
    .updateOne(
      {
        _id: request.body.id,
      },
      {
        $set: {
          name: request.body.name,
          supervisor: request.body.supervisor,
          childs: request.body.childs,
        },
      }
    )
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.deleteClass = (request, response, next) => {
  classSchema
    .findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

// exports.getTeacherClass = (request, response, next) => {
//   response.status(200).json({ data: request.params.supervisor });
// };
