const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const historySchema = new Schema ({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  syntoms: { type: String,},
  disease: { type: String },
  prescription: {type:String },
  default: {type:String ,default: "hola"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Histo = mongoose.model('Histo', historySchema);

module.exports = Histo;
