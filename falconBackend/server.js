const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const path = require('path');
const planetRoutes = require('./routes/planet');
const vehicleRoutes = require('./routes/vehicle');
const mongoose = require('mongoose');
const config = require('./config');

app.use(cors());
const port = process.env.PORT || 3000;

mongoose.connect(config.dbUrl, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
     console.log('Database connected Successfully');
  },
  (error) => {
     console.log('Error While Connecting Database: ' ,  error)
  }
)

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true}))
  app.get('/api/test', (req, res) => {
    res.status(200).send({"Working":true})
   });

   /*
   *Routes
   */
   app.use('/api/planets', require('./routes/planet'));
   app.use('/api/vehicles', require('./routes/vehicle'));
   app.use('/api/find', require('./routes/find'));


const server =   app.listen(port, ()=>{console.log(`server started on port ${port}`)});




