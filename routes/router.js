const express = require('express');
const router = express.Router();


// Import the JobApplication model
const { JobApplication } = require('../models');

// Create a new job application
router.post('/', async (req, res) => {
  try {
    // Create a new job application document using the request body
    const newApplication = new JobApplication(req.body);
    console.log(newApplication)
    // Save the new application to the database
    const result = await newApplication.save({ maxTimeMS: 30000 });
    res.send(result);
  } catch (error) {
    console.log('failed:')
    console.log(error)
    res.status(500).send(error);
  }
});


// Get all job applications
router.get('/', async (req, res) => {
  try {
  // Find all documents in the job applications collection
  const result = await JobApplication.find();
  res.send(result);
  } catch (error) {
  console.log(error);
  res.status(500).send(error);
  }
  });
  
  // Get a specific job application by id
  router.get('/:id', async (req, res) => {
  try {
  // Find the document with the specified id
  const result = await JobApplication.findById(req.params.id);
  res.send(result);
  } catch (error) {
  console.log(error);
  res.status(500).send(error);
  }
  });
  
  // Update a specific job application by id
  router.patch('/:id', async (req, res) => {
  try {
  // Find the document with the specified id and update it with the request body
  const result = await JobApplication.findByIdAndUpdate(req.params.id, req.body);
  res.send(result);
  } catch (error) {
  console.log(error);
  res.status(500).send(error);
  }
  });
  
  // Delete a specific job application by id
  router.delete('/:id', async (req, res) => {
  try {
  // Find the document with the specified id and delete it
  const result = await JobApplication.findByIdAndDelete(req.params.id);
  res.send(result);
  } catch (error) {
  console.log(error);
  res.status(500).send(error);
  }
  });

module.exports = router;
