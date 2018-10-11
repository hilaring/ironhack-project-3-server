const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: String,
    last_name: String,
    email: String,
    number: Number,
    adress: String,
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
  const Patient = mongoose.model('Patient', patientSchema);
  
  module.exports = Patient;