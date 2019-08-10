let Sequelize = require('sequelize');

module.exports = db => {
  const Endorsements = db.define(
    'endorsements',
    {
      endorser: {
        type: Sequelize.INTEGER,
      },
      endorsee: {
        type: Sequelize.INTEGER,
      },
      endorsement: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
    },
  );

  return Endorsements;
};
