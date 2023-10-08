const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  userid: {
    type: Number,
    required: true,
  },
  relation_to_patient: {
    type: String,
    required: true
  },
  patientid: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('patients', patientSchema);