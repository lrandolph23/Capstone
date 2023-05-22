const mongoose = require("mongoose");

const expSchema = new mongoose.Schema({
  where: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9' ]*$/
  },
  what: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  who: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
  // add date (when)
});

const Exp = mongoose.model('Exp', expSchema);

module.exports = Exp;
