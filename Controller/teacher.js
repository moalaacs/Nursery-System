const { response, json, request } = require("express");
const mongoose = require("mongoose");
require("./../Model/teacher");
const teacherSchema = mongoose.model("teacher");

exports.getAllTeachers = (request, response, next) => {
  teacherSchema
    .find()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.getTeacher = (request, response, next) => {
  teacherSchema
    .findById(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};

exports.addTeacher = (request, response, next) => {
  let newTeacher = new teacherSchema({
    _id: request.body.id,
    name: request.body.name,
    password: request.body.password,
    email: request.body.email,
    image: request.body.image,
  });
  newTeacher
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.updateTeacher = (request, response, next) => {
  teacherSchema
    .updateOne(
      {
        _id: request.body.id,
      },
      {
        $set: {
          name: request.body.name,
          password: request.body.password,
          email: request.body.email,
          image: request.body.image,
        },
      }
    )
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
};

exports.deleteTeacher = (request, response, next) => {
  teacherSchema
    .findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => next(error));
};
