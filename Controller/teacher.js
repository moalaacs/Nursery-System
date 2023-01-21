const { response, json } = require("express");
const mongoose = require("mongoose");
require("./../Model/teacher");
const teacherSchema = mongoose.model("teacher");

exports.getAllTeachers = (request, response, next) => {
  teacherSchema.find().then((data) => {
    response.status(200).json(data);
  }).catch(error => next(error));
  // response.status(200).json({ message: "GET" });
};

exports.addTeacher = (request, response, next) => {
  let newTeacher = new teacherSchema({
    id: request.body.id,
    name: request.body.name
  });
  newTeacher.save().then(result => {
    response.status(201).json(result);
  }).catch(error => next(error))
};

exports.updateTeacher = (request, response, next) => {
  teacherSchema.updateOne({
    id:request.body.id
  },{
    $set: {name: request.body.name}
  }).then(result=>{
    response.status(200).json({message:"updated"});
  }).catch(error=>next(error));
};

exports.deleteTeacher = (request, response, next) => {
  teacherSchema.deleteOne({
    id:request.body.id
  }).catch(error=>next(error));
  response.status(201).json({ message: "DELETE" });
};
