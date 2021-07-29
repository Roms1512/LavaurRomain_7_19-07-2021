const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
  pseudo: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true}
});

module.exports = mongoose.model('User', userShema);