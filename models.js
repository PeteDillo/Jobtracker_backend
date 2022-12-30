const mongoose = require('mongoose');

const jobApplicationSchema = require('./schemas').jobApplicationSchema;
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = { JobApplication };
