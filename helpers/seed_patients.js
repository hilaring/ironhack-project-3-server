const mongoose = require('mongoose');
const Patient = require('../models/patient.js');

mongoose.connect('mongodb://hilaring:Patata12*@ds225703.mlab.com:25703/ih-project-3', { useNewUrlParser: true })

Patient.collection.drop();

const patients = [
  {
    name: 'Oriol',
    last_name: 'Hilari',
    email: 'oriol@hilari.com',
    number: 666666663,
    adress: 'Pamplona, 96, Barcelona, Catalunya',
  },
  {
    name: 'Thor',
    last_name: 'Jubera',
    email: 'thor@spain.es',
    number: 12102018,
    adress: 'Pamplona, 96, Barcelona, Spain',
  },
  {
    name: 'Manu',
    last_name: 'Pacheco',
    email: 'pokemon@spain.es',
    number: 666123456,
    adress: 'Olesa de Montserrat, Catalunya, Spain',
  },
  {
    name: 'Mr. Potato',
    last_name: 'Potato',
    email: 'potato@toystory.com',
    number: 666666666,
    adress: 'Pamplona, 96, Barcelona, Catalunya',
  },
];

Patient.create(patients, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${patients.length} patients`);
  mongoose.connection.close();
});
