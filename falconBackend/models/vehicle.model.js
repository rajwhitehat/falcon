const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vehicleSchema = new Schema({
   name: {
      type: String
   },
   available_quantity: {
      type: Number
   },
   max_distance:{
       type: Number
   },
   speed:{
    type: Number
}
})

module.exports = mongoose.model('vehicle', vehicleSchema)