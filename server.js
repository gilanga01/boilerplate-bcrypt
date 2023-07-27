'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//START_ASYNC -do not remove notes, place code between correct pair of notes.
//var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
  //var result = bcrypt.compareSync(myPlaintextPassword, hash);

const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash ) => {
    console.log(hash);
     bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    
    console.log(res, " <=res is here")
  });
  });
  
  
//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
