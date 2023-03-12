const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  preferences: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  childAge: {
    type: Number,
    required: true,
    validate: /^[0-9]*$/
  }
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info;
