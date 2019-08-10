let db = require('./db.config');
let Sequelize = require('sequelize');

// Set table schema
let User = require('./user')(db);
let Tournament = require('./tournament')(db);

// // HELPER TO DROP ALL TABLES
// db.sync({force: true}).then(() => {
//   console.log('Tables have been dropped')
// })

db.sync().then(function() {
  console.log('Tables have been Created');
});

module.exports = {
  db: db,
  Users: User,
  Tournaments: Tournament,
};
