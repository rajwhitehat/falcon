const express = require('express');
const router = new express.Router();
const vehicle = require('../services/vehicle')



router.get('/', async (req, res, next) => {
        try {
            let planetList = await vehicle.getVehicles()
            res.status(200).send(planetList)
        } catch (err) {
            res.status(500).send(err['message'] || err)
        }
      });


      module.exports = router;