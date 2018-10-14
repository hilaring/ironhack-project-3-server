const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

mongoose.connect('mongodb://hilaring:Patata12*@ds225703.mlab.com:25703/ih-project-3', { useNewUrlParser: true })

User.collection.drop();

const users = [
  {
    username: 'admin',
    name: 'admin',
    lastname: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123', salt).toString(),
  },
];

User.create(users, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
