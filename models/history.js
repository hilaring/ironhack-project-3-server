const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema ({
  Date: String,
  Syntoms: { type: String, required: true, index: { unique: true }},
  Disease: { type: String },
  Prescription: {type:String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
