// Inside server.js//

// Lets use some of the packages we've installed
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const router = require('./router.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

//The names we're using below were defined in the last post
MongoClient.connect('mongodb://127.0.0.1:27017') // This is the location of where your local database is living.
  .then((client) => {
    const db = client.db('storeUser'); // The name we gave our DB
    const userCollection = db.collection('user'); // The name we gave our collection inside the DB
    const userRouter = router(userCollection); // Made
  
    app.use('/api/user', userRouter); // Defining the base route where we can later access our data
  })
  .catch(console.err);

app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
  console.log(`BackEnd Live at: localhost:${this.address().port}/api/user`);
});