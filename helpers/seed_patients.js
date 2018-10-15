const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Patient = require('../models/patient.js');

const saltRounds = 10;

mongoose.connect('mongodb://hilaring:Patata12*@ds225703.mlab.com:25703/ih-project-3', { useNewUrlParser: true })

Patient.collection.drop();

const patients = [
  {
    name: 'Pere',
    last_name: 'Busquet',
    email: 'pere@pere.pere',
    number: 666666666,
    adress: 'Pamplona, 96, Barcelona, Catalunya',
    visit: [{
        Date: 1990-10-15,
        Syntoms: 'Mal de cap',
        Disease: 'cuentitis',
        Prescription: 'paracetamol',
      }, {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        },
    }],
  },
  {
    name: 'Oriol',
    last_name: 'Hilari',
    email: 'oriol@hilari.com',
    number: 666666663,
    adress: 'Pamplona, 96, Barcelona, Catalunya',
    visit: [],
  },
  {
    name: 'Thor',
    last_name: 'Jubera',
    email: 'thor@spain.es',
    number: 12102018,
    adress: 'Pamplona, 96, Barcelona, Spain',
    visit: [],
  },
  {
    name: 'Manu',
    last_name: 'Pacheco',
    email: 'pokemon@spain.es',
    number: 666123456,
    adress: 'Olesa de Montserrat, Catalunya, Spain',
    visit: [],
  },
  {
    name: 'Mr. Potato',
    last_name: 'Potato',
    email: 'potato@toystory.com',
    number: 666666666,
    adress: 'Pamplona, 96, Barcelona, Catalunya',
    visit: [],
  },
];

Patient.create(patients, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${patients.length} patients`);
  mongoose.connection.close();
});
