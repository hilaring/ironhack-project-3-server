const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema ({
  username: { type: String, required: true, index: { unique: true }},
  password: { type: String, required: true,  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
