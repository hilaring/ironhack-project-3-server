const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

mongoose.connect('mongodb://hilaring:Patata12*@ds225703.mlab.com:25703/ih-project-3', { useNewUrlParser: true })

User.collection.drop();

const users = [
  {
    username: 'hilaring',
    name: 'Oriol',
    lastname: 'Hilari',
    email: 'orihil@gmail.com',
    password: bcrypt.hashSync('1234', salt).toString(),
  },
  {
    username: 'pere',
    name: 'Pere',
    lastname: 'Busquet',
    email: 'perebusquet@gmail.com',
    password: bcrypt.hashSync('1234', salt).toString(),
  },
];

User.create(users, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
