const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = new Schema ({
  syntoms: { type: String,},
  disease: { type: String },
  prescription: {type:String },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Histo = mongoose.model('Histo', historySchema);

module.exports = Histo;
