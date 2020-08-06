
const PlaneModel = require('../models/planet.model');


module.exports.getPlanets = async(options) => {
    try {
      return await PlaneModel.find({});
        return { status: 204 }
    } catch (e) {
        throw {
            status: 500,
            err: e['message']
        }
    }
}