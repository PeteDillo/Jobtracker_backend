const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobApplicationSchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'applied', // Set the default status to "applied"
    validate: {
      validator: function(value) {
        return ['applied', 'interviewing', 'offered', 'hired'].includes(value);
      },
      message: 'Status must be one of applied, interviewing, offered, or hired'
    }
  }
});


module.exports = { jobApplicationSchema };