const express = require('express');
const router = new express.Router();
const find = require('../services/find')



router.post('/', async (req, res, next) => {
        try {
            let result = await find.findFalcone(req.body)
            res.status(result['statusCode'] || 200).send(result['data'])
        } catch (err) {
            res.status(500).send(err['message'] || err)
        }
      });


      module.exports = router;