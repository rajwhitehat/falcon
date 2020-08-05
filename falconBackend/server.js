const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.json())
  app.get('/', (req, res) => {
    res.status(200).send("Api running");
   });



  app.listen(port);




