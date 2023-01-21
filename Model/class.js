const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  supervisor: Number,
  childs: [],
});

mongoose.model("class", schema);
