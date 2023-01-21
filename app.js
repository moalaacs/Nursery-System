// Using MVC

// Model :     contains all schema files  for DB
// Controller : contains all CRUD operations on Model schema
// Routes    : contains all end points using controller crud operations
// views     : contains responses html for routes end points

const express = require("express");
const teacherRouter = require("./Routes/teacher");
const childRouter = require("./Routes/child");
const classRouter = require("./Routes/class");
const mongoose = require("mongoose");

const server = express();

let port = process.env.PORT || 8080;

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/admissionDB")
  .then(() => {
    console.log("DB Connected...");
    server.listen(port, () => {
      console.log("Hello There ....", port);
    });
  })
  .catch((error) => {
    console.log("DB Error: " + error);
  });

// server.listen(port, () => {
//   console.log("Hello There ....", port);
// });

server.use(express.json());
server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter);

server.use((request, response, next) => {
  response.status(404).json({ message: "Not found" });
});

server.use((error, request, response, next) => {
  response.status(500).json({ message: "Error" + error });
});

