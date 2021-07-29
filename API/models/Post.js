const mongoose = require('mongoose');

const postShema = mongoose.Schema({
  image: { type: String, require: true },
  text: { type: String, require: true },
  
})