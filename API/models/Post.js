const mongoose = require('mongoose');

const postShema = mongoose.Schema({
  imageUrl: { type: String, require: true },
  text: { type: String, require: true },
  
})

module.exports = mongoose.model('Post', postShema);