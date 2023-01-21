const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
    ],
    unique: true,
  },
  image: { type: String },
});


// this is to name our document in db and assign our schmea to it
mongoose.model("teacher", schema);
