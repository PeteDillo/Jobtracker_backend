const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
const jobApplicationRouter = require('./routes/router');
const bodyParser = require('body-parser');


const db = require('./db');

db.connectToDb();


// Create an instance of the express app
const app = express();

// Use the body-parser middleware to parse JSON in the request body
app.use(bodyParser.json());

// Connect to the MongoDB instance using the MongoClient
let client;
MongoClient.connect(config.URL, { useNewUrlParser: true }, (err, c) => {
  if (err) {
    console.log("Error connecting to MongoDB:", err);
  } else {
    console.log("Connected to MongoDB!");
    client = c;
  }
});

// Use the jobApplicationRouter for all routes that begin with "/api/job-applications"
app.use('/api/job-applications', jobApplicationRouter);

// Start the server and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
