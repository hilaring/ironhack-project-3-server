const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: { type: String },
    last_name: { type: String },
    email: { type: String },
    number: { type: Number },
    adress: { type: String },
  }
);
  
  const Patient = mongoose.model('Patient', patientSchema);
  
  module.exports = Patient;