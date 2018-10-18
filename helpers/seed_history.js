const mongoose = require('mongoose');
const History = require('../models/history.js');

mongoose.connect('mongodb://hilaring:Patata12*@ds225703.mlab.com:25703/ih-project-3', { useNewUrlParser: true })

History.collection.drop();

const Histories = [
  {
    Date: '2018-10-18',
    Syntoms: 'Dolor de cabeza',
    Disease: 'Migraña',
    Prescription: 'Paracetamol',
  }, 
 
];

History.create(Histories, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${Histories.length} Histories`);
  mongoose.connection.close();
});
