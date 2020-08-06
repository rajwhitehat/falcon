const VehicleModel = require('../models/vehicle.model');


module.exports.getVehicles = async(options) => {
    try {
      return await VehicleModel.find({});
    } catch (err) {
        throw {
            status: 500,
            err: err['message']
        }
    }
}