const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: { type: Number },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String }
})

mongoose.model("teacher", schema);