const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: Number,
  name: { type: String, required: true, unique: true },
  age: { type: Number, min: 8 },
  level: ["PreKG", "KG1", "KG2"],
  address: {
    city: String,
    street: String,
    building: Number,
  },
});

mongoose.model("child", schema);
