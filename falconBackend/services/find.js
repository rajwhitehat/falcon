
const PlanetModel = require('../models/planet.model');
const VehicleModel = require('../models/vehicle.model');

module.exports.findFalcone = async(params) => {
    try {
        //assign Planet
      let falconesPlanet = 'Pingasor';
           if(params.hasOwnProperty(falconesPlanet)){
             let vehicleName = params[falconesPlanet];
             let planetDetails = await PlanetModel.findOne({name: falconesPlanet});
             let vehicleDetails =await VehicleModel.findOne({name:vehicleName });
             if(vehicleDetails['max_distance'] >= planetDetails.distance){
                 let timeTaken = planetDetails['distance']/vehicleDetails['speed'];
                 return {statusCode: 200, data:{status: 'success',time_taken: timeTaken, planet_name:falconesPlanet}};
             }
             else{
                return {statusCode: 404, data:{status: 'failure'}};
             }
           }
             else{
                return {statusCode: 404, data:{status: 'failure'}};
             }
     
    } catch (e) {
        throw {
            status: 400,
            err: e['message']
        }
    }
}