const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let planetSchema = new Schema({
   distance: {
      type: Number
   },
   name: {
      type: String
   }
})

module.exports = mongoose.model('planet', planetSchema)