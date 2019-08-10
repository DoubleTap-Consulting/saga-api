let db = require('./db.config');
let Sequelize = require('sequelize');

// Set table schema
let User = require('./user')(db);
let Tournament = require('./tournament')(db);
let Endorsement = require('./endorsement')(db);
let League = require('./league')(db);
let Content = require('./content')(db);
let Marketplace = require('./marketplace')(db);
let Featured = require('./featured')(db);
let Partner = require('./partner')(db);

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
  Endorsements: Endorsement,
  Leagues: League,
  Content,
  Marketplace,
  Featured,
  Partners: Partner,
};
